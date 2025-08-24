# mfe-angular-react-nx

This is a sample project for using MFEs with an Angular host and a React remote, using Nx.

All code is provided in the GitHub repo [https://github.com/angularexample/mfe-angular-react-nx](https://github.com/angularexample/mfe-angular-react-nx).

It includes step-by-step instructions for creating the project.

## Date Published

August 22, 2025

## Versions Used

At the time of this writing, we used the latest versions provided by Nx

* Angular 20.1.0
* React 19.0.0
* Nx 21.4.1

## About The Author

`JC Lango` is a UI Architect and Developer for many large-scale web applications at several well-known Fortune 500 companies.

He is an expert in **Angular** and **React** and maintains these sites at GitHub:

* **AngularExample** [https://github.com/angularexample](https://github.com/angularexample)
* **ReactJSExample** [https://github.com/reactjsexample](https://github.com/reactjsexample)

JC may be available to work remotely and can be contacted at these links:

* LinkedIn: [https://linkedin.com/in/jclango](https://linkedin.com/in/jclango)
* Email: [jobs@jclango.com](mailto:jobs@jclango.com)

## Table of Contents

* [Create the Nx Workspace](#create-the-nx-workspace)
  * [Open the Workspace in Your IDE](#open-the-workspace-in-your-ide)
  * [Create a Git Repository](#create-a-git-repository)
  * [Add the error.log Directory to the .gitignore File](#add-the-errorlog-directory-to-the-gitignore-file)
* [Add Nx Packages for Angular and React](#add-nx-packages-for-angular-and-react)
  * [Add the Nx Package for Angular](#add-the-nx-package-for-angular)
  * [Add the Nx Package for React](#add-the-nx-package-for-react) 
* [Generate the Angular Host App and Two Remotes](#generate-the-angular-host-app-and-two-remotes)
  * [Commit and Push the Changes for the Angular Host App](#commit-and-push-the-changes-for-the-angular-host-app)
* [Build and Run the Host Application](#build-and-run-the-host-application)
  * [Browser View of the Host Application](#browser-view-of-the-host-application)
  * [Use the Menu to Access the Remote Applications](#use-the-menu-to-access-the-remote-applications)
* [Generate the React Remote Application](#generate-the-react-remote-application)
  * [Build and Run the Remote Application](#build-and-run-the-remote-application)
  * [ReRun the Host Application](#rerun-the-host-application)
* [Add the React Remote Application to the Host](#add-the-react-remote-application-to-the-host)
  * [Convert the React Remote to a Web Component](#convert-the-react-remote-to-a-web-component)
  * [Add Package @r2wc/react-to-web-component](#add-package-r2wcreact-to-web-component)
  * [Update the React Remote to Convert to a Web Component](#update-the-react-remote-to-convert-to-a-web-component)
  * [In the Angular Host, Add a Wrapper Component](#in-the-angular-host-add-a-wrapper-component)
  * [Add the Wrapper Component and the React Remote Component to the Host Routes](#add-the-wrapper-component-and-the-react-remote-component-to-the-host-routes)
  * [Add Jsx to the Host TsConfig](#add-jsx-to-the-host-tsconfig)
  * [Add the React Remote to the Host Manifest](#add-the-react-remote-to-the-host-manifest)
  * [Add the React Remote URL to the Host HTML](#add-the-react-remote-url-to-the-host-html) 
* [ReRun the Host Application To Verify the React Remote Application](#rerun-the-host-application-to-verify-the-react-remote-application)
* [Next Steps](#next-steps)

## Create the Nx Workspace

You will need to create a new empty Nx workspace, with no app or framework.

Open a terminal window, go to the base directory where you want the new workspace and run the following command:

```
npx create-nx-workspace mfe-angular-react-nx --preset=apps
```

This will create a new Nx workspace in the directory `mfe-angular-react-nx`.

* The name of the project or workspace in this case is `mfe-angular-react-nx`.
* The option `--preset=apps` will create an empty workspace with no app or framework.

When prompted, select the following options.

```
 ? Which CI provider would you like to use?
 GitHub Actions
```

### Open the Workspace in Your IDE

Using your IDE, open the workspace.

The rest of the instructions will be done in your IDE.

In your IDE, Open a terminal window and ensure the location is the root of the workspace.

Use the IDE terminal to run all the commands in this project.

### Create a Git Repository

If you use the option for `GitHub Actions` when creating the workspace,
a local Git repository will automatically be created in the workspace directory.
In that case, you can skip this step to create a Git repository.

Use your IDE to create a Git repository.

Note: Alternatively, share the project on GitHub. This will create a new repository in your GitHub account.

### Add the error.log Directory to the .gitignore File

Use your IDE to add the `error.log` directory to the .gitignore file.

## Add Nx Packages for Angular and React

You need the Nx packages for Angular and React.

Note: The old packages: `@nrwl/angular`, `@nrwl/react` are deprecated.


### Add the Nx Package for Angular

```
nx add @nx/angular
```

### Add the Nx Package for React

```
nx add @nx/react
```

Commit and push the changes.

## Generate the Angular Host App and Two Remotes

Use the Nx Angular Generator in `@nx/angular` to create the Angular host app with this command:

```
nx g @nx/angular:host apps/host --dynamic --remotes=remote1,remote2 --style=scss --e2eTestRunner=playwright --unitTestRunner=jest
```

See the Nx documentation for more information on the [Angular Host App Generator Options](https://nx.dev/technologies/angular/api/generators/host#options)

We are using the following command line options.

* --dynamic
* --remotes=remote1,remote2
* --style=scss
* --e2eTestRunner=playwright
* --unitTestRunner=jest

**NOTE:** The --remotes option is a comma-separated list of remote applications.
When using the Angular host generator, the remote applications will always be Angular applications.

### Commit and Push the Changes for the Angular Host App

After you create the Angular host application, commit and push the changes.

**NOTE: You may get format errors** or warnings regarding HTML or the Nx Welcome page component.
Ignore those errors until after you have completed all the steps to create the remote MFE apps.

Then test the host application by running it.

## Build and Run the Host Application

Build and run the host application and test it in the browser.

You can use the Nx Console to run the host application.

Or you can use a command in the terminal window.

```
nx run host:serve:development
```

In this example, `host` is the name of the host application.

In the Run console output, it should include the browser address.

```
 ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
```

After you click on the link, you should see the host application running in the browser.

### Browser View of the Host Application

The browser view should have a menu with the host and remotes.

You should see the Nx Welcome page.

It will have a menu in the upper left corner.

In this case, if you have generated a host and two remotes,
the menu will have three items:

* Home
* Remote1
* Remote2

### Use the Menu to Access the Remote Applications

Try clicking on the `Remote1` or `Remote2` menu items.

You will see that each remote is accessed with routing.

The host application will be the root.
Each remote will be a child of the host application.

The remote app name will be in the URL path.
For example, the `Remote1` application URL will be:

```
http://localhost:4200/remote1
```

When you click on the `Remote1` menu item, you should see the remote application running in the browser.

When you click on the `Remote2` menu item, you should see the remote application running in the browser.

#### Verify the Remote View is Provided by MFE

To verify that the remote view is provided by MFE,
open the browser Developer Tools and go to the `Network` tab.

Refresh the browser.

For each remote page that you visit, you should see a request for each of the remote applications.

For example, for the view at
`http://localhost:4200/remote1/`
the request is:

`http://localhost:4201/default-apps_remote1_src_app_remote-entry_entry_ts.js`

Webpack bundles the remote app as a single JavaScript file, and the remote application is served from its own server address.
The remote app is accessed as a script request by the host application.

The request URL for the second remote application is:

`http://localhost:4202/default-apps_remote2_src_app_remote-entry_entry_ts.js`

* In this case, **4202** is the port address for the second remote application.

Each remote application will be served from its own server address.

## Generate the React Remote Application

As noted earlier, the Angular host generator will always create Angular applications for the remotes.

If you want to create a React remote application, you will need to use the Nx React Remote App Generator.

Generate the React remote application using the `@nx/react` package with this command:

```
nx g @nx/react:remote apps/remote3 --style=scss --e2eTestRunner=playwright --bundler=webpack
```

See the Nx documentation for more information on the [React Remote App Generator Options](https://nx.dev/technologies/react/api/generators/remote#options)

We are using the following command line options:

* --style=scss
* --e2eTestRunner=playwright
* --bundler=webpack

If you provide a path name for the remote application, you don't need the name or directory options.

In this case, `remote3` is the name, and `apps` is the directory.

**NOTE: Do not supply the `--host` option.**

Since the host is an Angular application, the generation step will fail.
The Nx generator does not support mixing different frameworks in MFEs.

You will need to configure the remote application to the host manually.
We will provide detailed instructions later in this document.

### Build and Run the Remote Application

Build and run the remote application and test it in the browser.

You can use the Nx Console to run the remote application.

Or you can use a command in the terminal window.

```
nx run remote3:serve:development
```

In this example, `*remote3` is the name of the React remote application.

Look in the Run console output for the browser address.
In this case, it is:

http://localhost:4203/

After clicking the link, you should see the remote application running in the browser.

Notice that the remote application has its own address. All remotes are served from their own server address.

### ReRun the Host Application

Stop the remote application.

Run the host application to make sure it still works.

Notice that the React remote application is not started and is not available.

The host does not yet know about the React remote application.

## Add the React Remote Application to the Host

The Nx generator does not support mixing different frameworks in MFEs.

You will need to configure the remote application to the host manually.

There are several steps to manually add the React remote application to the Angular host.

### Convert the React Remote to a Web Component

To use the React remote application in the Angular host,
it must be converted to a Web Component.

We will use the `@r2wc/react-to-web-component` package to convert the React remote application to a Web Component.

### Add Package @r2wc/react-to-web-component

Add the package `@r2wc/react-to-web-component` to the Nx workspace.

```
nx add @r2wc/react-to-web-component
```

This package will convert a React component to a Web Component.

It can only be used with React 18 or newer.

### Update the React Remote to Convert to a Web Component

Open the React remote app component.

`apps/remote3/src/app/app.tsx`

Import the `r2wc` function from the package.

```typescript
import r2wc from '@r2wc/react-to-web-component';
```

In your React component, after the `App()` function,
add a function to convert the component to a Web Component.

You will need to supply a new element name for the Web Component.
In this case, we will use the name `wc-remote3`.

```typescript
export function defineReactWebComponent() {
  // Define the new custom element with the element name for the React Web Component.
  if (!customElements.get('wc-remote3')) {
    if (!customElements.get('wc-remote3')) {
      // This is where we convert the React component to a Web Component
      customElements.define('wc-remote3', r2wc(App));
    }
  }
}
```

Call the convert function at the end of the file.

```typescript
defineReactWebComponent();
export default App;
```

### In the Angular Host, Add a Wrapper Component

We need an Angular component to wrap the React Web Component.

We will call this component `react-wrapper`.

In the Angular host app, create a new directory using the same name as the component,
in the `src/app` directory, and create the component, using the Nx Angular component generator.

```
nx g @nx/angular:component apps/host/src/app/react-wrapper/react-wrapper
```

Open the wrapper component.

`apps/host/src/app/react-wrapper/react-wrapper.ts`

Remove the `templateUrl` and `styleUrl` properties.

Delete those two files.

`apps/host/src/app/react-wrapper/react-wrapper.css`

`apps/host/src/app/react-wrapper/react-wrapper.html`

Remove the import for the `CommonModule`.

BEFORE
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-react-wrapper',
  imports: [CommonModule],
  templateUrl: './react-wrapper.html',
  styleUrl: './react-wrapper.css',
})
export class ReactWrapper {}
```

Add the following code to the wrapper component.

AFTER
```typescript
import { AfterContentInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-react-wrapper',
  template: '<div #reactWrapper></div>',
})
export class ReactWrapper implements AfterContentInit {
  @ViewChild('reactWrapper', { read: ElementRef, static: true }) reactWrapper!: ElementRef;
  private route: ActivatedRoute = inject(ActivatedRoute);

  async ngAfterContentInit(): Promise<void> {
    const elementName = this.route.snapshot.data['elementName'];
    const loader = this.route.snapshot.data['loadChildren'];
    await loader();
    const element = document.createElement(elementName);
    this.reactWrapper.nativeElement.appendChild(element);
  }
}
```

This wrapper component will load the React Web Component into the view.

It gets the `load()` function from the route data `loadChildren` property.

It gets the name of the Web Component from the route data `elementName` property.`

Then it creates a new element and inserts the React Web Component into it.

### Add the Wrapper Component and the React Remote Component to the Host Routes

Open the host routes file.

`apps/host/src/app/app.routes.ts`

Import the wrapper component.

```typescript
import { ReactWrapper } from './react-wrapper/react-wrapper';
```

Add a new route by adding the following code to the `app.routes.ts` file.

```
  {
    path: 'remote3',
    component: ReactWrapper, // the Angular wrapper component which will load any React web component
    data: {
      elementName: 'wc-remote3', // the name of the custom element which is a React web component
      loadChildren: () => import('remote3/Module'), // the dynamic import of the React web component
    },
  },
```

  * data.elementName is the name of the React Web Component, defined in the React remote app as a Web Component.
  * data.loadChildren is the dynamic module import.

### Add Jsx to the Host TsConfig

Open the host tsconfig.json file.

`apps/host/tsconfig.json`

Under the compilerOptions, add the following code to allow JSX.

```
  "compilerOptions": {
    "jsx": "react-jsx",
```

### Add the React Remote to the Host Manifest

Open the host manifest file.

`apps/host/public/module-federation.manifest.json`

BEFORE
```json
{
  "remote1": "http://localhost:4201/mf-manifest.json",
  "remote2": "http://localhost:4202/mf-manifest.json"
}
```

AFTER
```json
{
  "remote1": "http://localhost:4201/mf-manifest.json",
  "remote2": "http://localhost:4202/mf-manifest.json",
  "remote3": "http://localhost:4203/mf-manifest.json"
}
```

### Add the React Remote URL to the Host HTML

Open the host app.html file.

`apps/host/src/app/app.html`

Add the following code to the host app.html file.

```
  <li><a routerLink="remote3">Remote3</a></li>
```

## ReRun the Host Application To Verify the React Remote Application

After clicking on the navigation link, you should see the React remote application in the Angular host application.

## Next Steps

When using the Nx generator to create the host and remote applications,
it will automatically use the Nx Welcome page component for each of the view components.

`apps/host/src/app/nx-welcome.ts`

Once you have generated the host and remote MFE apps, you can replace the default welcome page component with your own component.
