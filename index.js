const receivesAFunction = (callback) => callback();

const returnsANamedFunction = myCallback => {
    myCallback = () =>  {
        return 'This is my callback.';
    };
    return myCallback
}

const returnsAnAnonymousFunction = () => {
    return () => {
        return 'This is my anonymous function.'
    }
}