
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
//This file handles the login and log out for users
const updateUserProfile = async (email, firstName, lastName) => { //Updates user profile when firstname/lastname is edited
      const formattedEmail = email.replace('@', '_at_').replace('.', '_dot_');
      const docRef = doc(db, "users", formattedEmail);
      await setDoc(docRef, {
        firstName: firstName,
        lastName: lastName,
      }, { merge: true });
    };
//Fetches the users information based on the supplied user which has an email attribute. Searches firestore using that email attribute
  useEffect(() => {
    if (user) {
      const getUserData = async () => {
        setIsLoading(true);
        const formattedEmail = user.email.replace('@', '_at_').replace('.', '_dot_');
        const docRef = doc(db, "users", formattedEmail);
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
 //Logs user out of firestore
  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
    }).catch((error) => {
      console.error(error);
    });
  };

  //Saves information to firestore after user edits firstname and lastname
  const handleSave = async () => {
    const formattedEmail = user.email.replace('@', '_at_').replace('.', '_dot_');
    const docRef = doc(db, "users", formattedEmail);
    await setDoc(docRef, {
      firstName: firstName,
      lastName: lastName,
    }, { merge: true });

    setIsEditing(false);
  };

//Display login button if user is not recognized
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
//For when firestore is taking a long time to access information
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

//Displays all the information for the profile page, conditonal on if the user is recognized or not an if the user can edit their firstname and lastname
  return (
    <View>
      <Text>Email: {user ? user.email : 'Loading...'}</Text>
      {isEditing ? (
        <>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
             onChangeText={text => {
                setFirstName(text);
                updateUserProfile(user.email, text, lastName);
              }}
            value={firstName}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
             onChangeText={text => {
                setFirstName(text);
                updateUserProfile(user.email, firstName, text);
              }}
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
