import { Text, View } from 'react-native';
import React from "react";
import { firestore } from "../firebase/firebase";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    firestore.collection("users")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ users: data });
      });
  }

  render() {
    const { users } = this.state;
    return (
      <View>
        {users.map(user => (
          <View key={user.uid}>
                  <Text>Name: {user.displayName}</Text>
                  <Text>Email: {user.email}</Text>
                  <Text>Dog Preference: </Text>
          </View>

        ))}
      </View>
    );
  }
}

export default Profile;
