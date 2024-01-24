import React from "react";

const ImageGenerationPrivacy = () => {
    return (
        <div className="policy">
            <h3>What Information We Collect:</h3>
            <p>At AI Image Generator, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our AI Image Generator app. By using the app, you consent to the practices described in this policy.</p>
            <h3>Information We Collect:</h3>
            <p>
                Personal Information: We do not collect any personal information that can identify you as an individual.
                Image Data: The AI Image Generator app may temporarily process and analyze the images you provide within the app. However, we do not store or retain any of your image data once the generation process is complete.
                Use of Information:

                Image Generation: The images you provide within the app are used solely for the purpose of generating the desired output and are not shared or used for any other purposes.
                Statistical Analysis: We may collect anonymous usage data to analyze trends, improve app performance, and enhance user experience. This data does not include any personally identifiable information.
                Data Security:

                We take appropriate security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
                However, please note that no method of data transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
                Third-Party Services:

                The AI Image Generator app may utilize third-party services, such as cloud hosting or analytics tools, to enhance app functionality or gather usage insights. These services may have their own privacy policies, and we encourage you to review them.
                Children's Privacy:

                The AI Image Generator app is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will promptly delete it from our records.
                Changes to the Privacy Policy:

                We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective when posted within the app. Your continued use of the AI Image Generator app after any modifications to the Privacy Policy constitutes acceptance of those changes</p>
            <h3>Your Choices and Rights:</h3>
            <p>
                {" "}
                You havethe right to access and update your personal information in the
                app's settings. You also have the right to request that we delete your
                personal information, although we may need to retain certain information
                for legal or business purposes. Changes to this Privacy Policy: We may
                update this privacy policy from time to time to reflect changes in our
                practices or legal obligations. We will notify you of any material
                changes to this policy by posting a notice in the app or sending you an
                email.
            </p>
        </div>
    );
};

export default ImageGenerationPrivacy;
