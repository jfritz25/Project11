// Profile.tsx
import React, { useState, useEffect } from 'react';
import { View, Button, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { auth, doc, getDoc, setDoc } from '../../FirebaseConfig';
import { db } from '../../FirebaseConfig';
import LoginModal from '../(modals)/login';

function Profile() {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [joinDate, setJoinDate] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (user) {
      const getUserData = async () => {
        setIsLoading(true);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setFirstName(docSnap.data().firstName);
          setLastName(docSnap.data().lastName);
          setJoinDate(docSnap.data().date);
        } else {
          console.log("No such document!");
        }
        setIsLoading(false);
      };

      getUserData();
    }
  }, [user]);

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
    }).catch((error) => {
      console.error(error);
    });
  };

  const handleSave = async () => {
    const docRef = doc(db, "users", user.uid);
    await setDoc(docRef, {
      firstName: firstName,
      lastName: lastName,
    }, { merge: true });

    setIsEditing(false);
  };

if (!user) {
    return (
      <View>
        <Button title="Login" onPress={() => setModalVisible(true)} />
        <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
          <LoginModal onLogin={setUser} />
        </Modal>
      </View>
    );
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>Email: {user ? user.email : 'Loading...'}</Text>
      {isEditing ? (
        <>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
            onChangeText={text => setFirstName(text)}
            value={firstName}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
            onChangeText={text => setLastName(text)}
            value={lastName}
          />
          <TouchableOpacity
            style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 10 }}
            onPress={handleSave}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Save</Text>
          </TouchableOpacity>
        </>
      ) : (
       <>
           <Text>First Name: {typeof firstName === 'string' ? firstName : 'Loading...'}</Text>
           <Text>Last Name: {typeof lastName === 'string' ? lastName : 'Loading...'}</Text>
           <Text>Join Date: {typeof joinDate === 'string' ? joinDate : 'Loading...'}</Text>
           <Button title="Edit" onPress={() => setIsEditing(true)} />
       </>
      )}
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
};

export default Profile;
