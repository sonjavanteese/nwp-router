import { createClient } from '@supabase/supabase-js'
import { writable } from 'svelte/store'

const supabaseUrl = 'https://xfcfjwsobkcneeqbvijr.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const nwp_auth = writable(null)
export const nwp_user = writable(null)

export const supabase = createClient(supabaseUrl, supabaseKey)

const doSignup = async (email, password) => {
    try {
        let { user, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        return user;
    } catch (error) {
        alert(`Error: ${error}`);
    }
}
const doSignin = async (email, password) => {
    try {
        const { user, error } = await supabase.auth.signIn({ email, password });
        if (error) throw error;
        return user;
    } catch (error) {
        alert(`Error: ${error}`);
    }
}
const doSignout = async () => {
    try {
        let { error } = await supabase.auth.signOut();
        if (error) throw error;
        return true;
    } catch (error) {
        alert(`Error: ${error}`);
    }
};

const resetData = () => {
    nwp_auth.set(null);
    nwp_user.set(null);
}
export const signUp = async (email, password) => {
    doSignup(email, password).then((data) => {
        console.log('SignUp', data);
    })
}
export const signIn = async (email, password) => {
    doSignin(email, password)
        .then((data) => {
            nwp_user.set(data)
        })
}
export const signOut = async () => {
    doSignout().then(() => resetData())
}


// export { supabase, signIn, signUp, signOut, nwp_user }