import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "src/schemas/user.schema";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createOne(user:any){
    return await this.userModel.create(user);
  }

  async updateOne(user){
    return await this.userModel.findOneAndUpdate({phonenumber: user.phonenumber}, user)
  }
  
  async findOne(phonenumber): Promise<User> {
    return await this.userModel.findOne({ phonenumber: phonenumber });
  }
}
