module.exports = 
    {
        "env": {
            "browser": true,
            "es6": true
        },
        "globals": {
            "Atomics": "readonly",
            "SharedArrayBuffer": "readonly"
        },
        "parserOptions": {
            "ecmaVersion": 2018,
            "sourceType": "module"
        },
        "extends": "standard",
        "rules": {
            "no-undef": 0,
            "semi": ["error", "always"]
        }
    };
