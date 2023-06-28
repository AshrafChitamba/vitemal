# Vitemail

> Vitemail is a library for sending emails easily

### Sections Breakdown

1. [module configuration](#module)
1. [service configuration](#service)
1. [type reference usage](#type)

### Installation

```
 npm i vitemail
```

### Usage

<a id="module"></a>

1. **_Module Configuration_**

In your module file where you want to use it, provide your auth details to the **_authProvider method_**.

```javascript
import { ViteMailModule } from "vitemail";

@Module({
  imports: [
    ViteMailModule.authProvider({
      email: "example@gmail.com",
      password: "*******",
    }),
  ],
})
export class AppModule {}
```

<a id="service"></a>

2. **_Service Configuration_**

In your service file where you want to use it.

```javascript
import { ViteMailService } from "vitemail";
```

<a id="type"></a>

3. **_Types example_**

```javascript
import { VitemailOptions } from "vitemail";

const options: VitemailOptions = {

}
```
