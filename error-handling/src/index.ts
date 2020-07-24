class InternalThrow {
    public doSomething() {
        this.throwError();
    }

    private throwError() {
        throw new Error();
    }
}

const iThrow = new InternalThrow();
try {
    iThrow.doSomething();
} catch {
    console.log('Catch error safely');
}

/**
If you run this code, you could catch error.
```
> error-handling@0.0.1 start 
> ts-node src/index.ts

Catch error safely
```
**/
