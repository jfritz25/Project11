import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth, fetchSignInMethodsForEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword, doc, db, setDoc, collection, query, where, getDocs} from '../../FirebaseConfig';

const LoginModal = ({ onLogin }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('');
  const [isEmailEntered, setIsEmailEntered] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState(false);

  const checkEmailExists = async (email) => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

 const handleContinue = async () => {
   setIsEmailEntered(true);
   try {
     const emailExists = await checkEmailExists(email);
     console.log('Email exists:', emailExists);
     setIsExistingUser(emailExists);
   } catch (error) {
     console.error(error);
   }
 };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      onLogin(userCredential.user);
      setModalVisible(false);
    } catch (error) {
      console.error(error);
      setModalVisible(false);
    }
  };

const handleSignUp = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const docRef = doc(db, "users", user.uid);
    await setDoc(docRef, {
      firstName: firstName,
      lastName: lastName,
      date: date,
    }, { merge: true });
    onLogin(user);
    setModalVisible(false);
  } catch (error) {
    console.error(error);
    setModalVisible(false);
  }
};



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Log in or sign up</Text>
            {!isEmailEntered ? (
              <>
                <Text>Email:</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                  onChangeText={text => setEmail(text)}
                  value={email}
                  placeholder="Email"
                />
                <TouchableOpacity
                  style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}
                  onPress={handleContinue}
                >
                  <Text style={{ color: 'white', textAlign: 'center' }}>Continue</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                {!isExistingUser && (
                  <>
                    <Text>First Name:</Text>
                    <TextInput
                      style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                      onChangeText={text => setFirstName(text)}
                      value={firstName}
                      placeholder="First Name"
                    />
                    <Text>Last Name:</Text>
                    <TextInput
                      style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                      onChangeText={text => setLastName(text)}
                      value={lastName}
                      placeholder="Last Name"
                    />
                    <Text>Date:</Text>
                    <TextInput
                      style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                      onChangeText={text => setDate(text)}
                      value={date}
                      placeholder="Date"
                    />
                  </>
                )}
                <Text>Password:</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                  onChangeText={text => setPassword(text)}
                  value={password}
                  placeholder="Password"
                  secureTextEntry
                />
                {isExistingUser ? (
                  <TouchableOpacity
                    style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}
                    onPress={handleLogin}
                  >
                    <Text style={{ color: 'white', textAlign: 'center' }}>Log In</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 10 }}
                    onPress={handleSignUp}
                  >
                    <Text style={{ color: 'white', textAlign: 'center' }}>Sign Up</Text>
                  </TouchableOpacity>
                )}
              </>
            )}
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Login/Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginModal;
