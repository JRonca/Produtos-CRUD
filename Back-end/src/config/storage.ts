import {storage} from "firebase-admin";

const bucket = storage().bucket("jose-renato-onboarding.appspot.com");
export default bucket;