import { Injectable } from '@angular/core';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../interfaces/user';

@Injectable()
export class UserService {

  constructor() {
    this.userRepository = new UserRepository();
    this.user = this.userRepository.getUserById(1);
  }
  protected userRepository: UserRepository;
  protected user: User;

  public getUser = () => {
    return this.user;
  }

  public saveUser = (user: User) => {
    this.userRepository.saveUser(user);
    this.user = user;
    return this.user;
  }

}
