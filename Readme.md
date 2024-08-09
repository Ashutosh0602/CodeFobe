# CodeFobe

CodeFobe is a React Native application developed using Expo. It showcases features such as real-time collaborative tools and user data display, utilizing Expo for a streamlined development process.

## Prerequisites

- Node.js (v16 or later)
- Expo CLI
- Git

## Setup Instructions

Follow these steps to set up the CodeFobe project locally:

1. **Clone the Repository**

   First, clone the repository to your local machine:

   ```bash
   git clone https://github.com/Ashutosh0602/CodeFobe.git
   ```

   Navigate to the project directory:

   ```bash
   cd CodeFobe
   ```

2. **Install Dependencies**

   Install the necessary dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Expo Development Server**

   Launch the Expo development server with:

   ```bash
   npm start
   # or
   yarn start
   ```

   This command will open the Expo CLI in your default browser and provide options to run the app on an emulator or a physical device.

4. **Running on a Mobile Device**

   - **iOS**: Use the Expo Go app from the App Store. Scan the QR code displayed in the Expo CLI.
   - **Android**: Use the Expo Go app from the Google Play Store. Scan the QR code displayed in the Expo CLI.

5. **Running on an Emulator**

   - **iOS Emulator**: Ensure you have Xcode installed and run `npx expo start --ios` in the project directory.
   - **Android Emulator**: Ensure you have Android Studio installed and set up an emulator. Run `npx expo start --android` in the project directory.

## Project Structure

- **/previous**: Different screens or views of the application.
- **/next**: Different screens or views of the application.
- **/api**: API interaction logic and fetch requests.
- **/navigation**: Navigation setup and configurations.

## Additional Information

- To upgrade Expo SDK or dependencies, follow the [Expo upgrade guide](https://docs.expo.dev/versions/latest/sdk/overview/).
- For detailed documentation on React Native and Expo, refer to the [React Native Documentation](https://reactnative.dev/docs/getting-started) and [Expo Documentation](https://docs.expo.dev/).

## Contributing

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your changes.
