import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { sessionStorage } from "~/services/session.server";
import { User } from "~/models/user";
import bcrypt from "bcryptjs";

import { db } from "~/utils/db.server";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<User | Error | null>(sessionStorage, {
    sessionKey: "sessionKey",
    sessionErrorKey: "sessionErrorKey",
});

authenticator.use(
    new FormStrategy(async ({ form, context }) => {
        // Here you can use `form` to access and input values from the form.
        // and also use `context` to access more things from the server
        let email = form.get("email") as string; // or email... etc
        let password = form.get("password") as string;

        if(!email || email?.length ===0) throw new AuthorizationError("Bad Credential: Email is required");
        if(typeof(email) !== 'string')
        {
        throw new AuthorizationError("Bad Credential: Email must be string");
        }

        if(!password || password?.length ===0) throw new AuthorizationError("Bad Credential: Password is required");
        if(typeof(password) !== 'string')
        {
        throw new AuthorizationError("Bad Credential: Password must be string");
        }

        let returnUser = null;
        
        const user = await db.user.findUnique({
            where: { username: email },
          });
          if (!user) return null;

        const isCorrectPassword = await bcrypt.compare(password, user.passwordHash);
        if (!isCorrectPassword)
        {
            throw new AuthorizationError("Bad Credential");
        }
        else
        {
            returnUser = {name: email, token: `${password}-${new Date().getTime()}`};
            return await Promise.resolve({...returnUser});
        }
        
        
        /*if(email === 'exiang83@yahoo.com' && password === 'twixrox')
        {
        user = {name: email, token: `${password}-${new Date().getTime()}`};

            // And return the user as the Authenticator expects it
        return await Promise.resolve({...user});
        }
        else
        {
        throw new AuthorizationError("Bad Credential");
        }*/

        
    })
);

export default authenticator;