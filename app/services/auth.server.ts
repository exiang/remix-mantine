import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { sessionStorage } from "~/services/session.server";
import { User } from "~/models/user";

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

        let user = null;

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

        if(email === 'exiang83@yahoo.com' && password === '123456')
        {
        user = {name: email, token: `${password}-${new Date().getTime()}`};

            // And return the user as the Authenticator expects it
        return await Promise.resolve({...user});
        }
        else
        {
        throw new AuthorizationError("Bad Credential");
        }

        
    })
);

export default authenticator;