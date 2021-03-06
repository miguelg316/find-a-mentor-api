import { Document, ObjectID } from 'mongoose';
import { FileMeta } from './filemeta.interface';

export enum Role {
  ADMIN = 'Admin',
  MENTOR = 'Mentor',
  MEMBER = 'Member',
}

export enum ChannelName {
  EMAIL = 'email',
  SLACK = 'slack',
  LINKED = 'linkedin',
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
  GITHUB = 'github',
  WEBSITE = 'website',
}

export interface Channel extends Document {
  readonly type: ChannelName;
  readonly id: string;
}

export interface User extends Document {
  readonly _id: ObjectID;
  readonly auth0Id: string;
  readonly email: string;
  readonly available: boolean;
  readonly name: string;
  readonly avatar: string;
  readonly image: FileMeta;
  readonly title: string;
  readonly description: string;
  readonly country: string;
  readonly spokenLanguages: string[];
  readonly tags: string[];
  readonly roles: Role[];
  readonly channels: Channel[];
  readonly createdAt: string;
  readonly capacity: number;
  readonly timezone: string;
}
