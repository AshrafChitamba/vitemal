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

<a id="section2"></a>
### Usage
<details>
<summary>In your app.module.ts provide your auth details to the provider</summary>
</details>

```javascript
import { ViteMailModule } from 'vitemail';

@Module({
  imports: [
    ViteMailModule.authProvider({
      email: 'example@gmail.com',
      password: '*******',
    }),
  ],
})
export class AppModule {}
```

