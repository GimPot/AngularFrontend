export class User {

  constructor(_id = '', username = '', password = '', email = '',
              userImage = '', firstName = '', lastName = '',
              displayName = '') {

    this._id = _id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.userImage = userImage;
    this.firstName = firstName;
    this.lastName = lastName;
    this.displayName = displayName;

  }

  _id: string;
  username: string;
  password: string;
  email: string;
  userImage: string;
  firstName: string;
  lastName: string;
  displayName: string;
  createdAt: undefined;


}
