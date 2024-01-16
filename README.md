# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



4575 verbose stack Error: EBUSY: resource busy or locked, rename 'C:\Users\TPS-admin\AppData\Local\npm-cache\_cacache\tmp\6dcf2c60' -> 'C:\Users\TPS-admin\AppData\Local\npm-cache\_cacache\content-v2\sha512\e3\09\f4592845e374eb820b240493d1a820f47dc1dbcd36239daa2c91d889ad51e0f3acb1a19f1952ab17bf29f8594a9e8518852a769c94e86a93dc38522d8a57'
4575 verbose stack     at async Object.rename (node:internal/fs/promises:779:10)
4575 verbose stack     at async moveFile (C:\Program Files (x86)\nodejs\node_modules\npm\node_modules\@npmcli\fs\lib\move-file.js:30:5)
4575 verbose stack     at async C:\Program Files (x86)\nodejs\node_modules\npm\node_modules\cacache\lib\content\write.js:172:9
4575 verbose stack     at async handleContent (C:\Program Files (x86)\nodejs\node_modules\npm\node_modules\cacache\lib\content\write.js:105:5)
4576 verbose cwd C:\Users\TPS-admin\Desktop\Credit-Bureau-Report-front
4577 verbose Windows_NT 10.0.14393
4578 verbose node v21.6.0
4579 verbose npm  v10.2.4
4580 error code EEXIST
4581 error syscall rename
4582 error path C:\Users\TPS-admin\AppData\Local\npm-cache\_cacache\tmp\6dcf2c60
4583 error dest C:\Users\TPS-admin\AppData\Local\npm-cache\_cacache\content-v2\sha512\e3\09\f4592845e374eb820b240493d1a820f47dc1dbcd36239daa2c91d889ad51e0f3acb1a19f1952ab17bf29f8594a9e8518852a769c94e86a93dc38522d8a57
4584 error errno -4082
4585 error EBUSY: resource busy or locked, rename 'C:\Users\TPS-admin\AppData\Local\npm-cache\_cacache\tmp\6dcf2c60' -> 'C:\Users\TPS-admin\AppData\Local\npm-cache\_cacache\content-v2\sha512\e3\09\f4592845e374eb820b240493d1a820f47dc1dbcd36239daa2c91d889ad51e0f3acb1a19f1952ab17bf29f8594a9e8518852a769c94e86a93dc38522d8a57'
4586 error File exists: C:\Users\TPS-admin\AppData\Local\npm-cache\_cacache\content-v2\sha512\e3\09\f4592845e374eb820b240493d1a820f47dc1dbcd36239daa2c91d889ad51e0f3acb1a19f1952ab17bf29f8594a9e8518852a769c94e86a93dc38522d8a57
4587 error Remove the existing file and try again, or run npm
4588 error with --force to overwrite files recklessly.
4589 verbose exit -4082
4590 timing npm Completed in 609515ms
4591 verbose unfinished npm timer command:i 1705390296805
4592 verbose unfinished npm timer reify 1705390296808
4593 verbose unfinished npm timer reify:unpack 1705390298992
4594 verbose unfinished npm timer reifyNode:node_modules/@eslint/eslintrc/node_modules/globals 1705390299155
4595 verbose unfinished npm timer reifyNode:node_modules/@ant-design/icons-svg 1705390299190
4596 verbose unfinished npm timer reifyNode:node_modules/@ant-design/icons 1705390299190
4597 verbose code -4082
4598 error A complete log of this run can be found in: C:\Users\TPS-admin\AppData\Local\npm-cache\_logs\2024-01-16T07_31_36_332Z-debug-0.log

