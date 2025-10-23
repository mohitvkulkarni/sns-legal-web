import React from "react";
import { Box, Container, Typography } from "@mui/material";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <Box sx={{ pt: { xs: 12, md: 14 }, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ textAlign: "center", mb: 4 }}
        >
          Privacy Policy
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", mb: 6, color: "text.secondary" }}
        >
          Effective Date: 1st July 2025
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", mb: 6, color: "text.secondary" }}
        >
          Firm Name: SNS Legal
        </Typography>

        <Box sx={{ maxWidth: "800px", mx: "auto", space: 4 }}>
          <Typography variant="body1" paragraph>
            SNS Legal ("we," "us," or "our") values and respects your privacy.
            This Privacy Policy outlines how we collect, use, store, and protect
            your personal information. Our commitment is rooted in transparency,
            confidentiality, and your right to control your data.
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing or using our website or contacting us via email, you
            acknowledge and agree to the practices described in this Privacy
            Policy.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            1. What Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We collect minimal personal data, and only when voluntarily
            submitted through the contact forms or direct communication
            channels. The specific information we collect includes: Name, Email
            address, and Any additional information voluntarily shared in your
            message (such as nature of legal inquiry).
          </Typography>
          <Typography variant="body1" paragraph>
            We do not collect sensitive personal identifiers such as financial
            information, government ID numbers, or passwords through our
            website.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            2. How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph>
            We collect and use your personal information solely for the
            following purposes:
          </Typography>
          <Box component="ul" sx={{ ml: 3, mb: 2 }}>
            <li>To respond to your inquiry or legal consultation request</li>
            <li>To schedule meetings or follow-ups as per your request</li>
            <li>
              To understand your legal needs and determine how we may assist you
            </li>
            <li>To contact you with regard to our engagement, if initiated</li>
          </Box>
          <Typography variant="body1" paragraph>
            We do not use your data for marketing, analytics, advertising, or
            any form of profiling. We do not share, sell, rent, or distribute
            your information to third parties.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            3. Data Retention and Deletion
          </Typography>
          <Typography variant="body1" paragraph>
            All personal information you share with us via our website or email
            will be stored for a maximum of 30 days from the date of submission.
            If there is no ongoing legal engagement, your data will be
            permanently deleted from our records automatically after this
            period.
          </Typography>
          <Typography variant="body1" paragraph>
            In case of active engagement or legal proceedings, information may
            be retained securely and only for as long as necessary to comply
            with legal, professional, or contractual obligations.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            4. Your Rights – Opt-Out & Data Deletion
          </Typography>
          <Typography variant="body1" paragraph>
            You have full control over your personal data. At any time, you may:
          </Typography>
          <Box component="ul" sx={{ ml: 3, mb: 2 }}>
            <li>Request a copy of your submitted data</li>
            <li>Request correction of incorrect details</li>
            <li>Request deletion of your information from our systems</li>
          </Box>
          <Typography variant="body1" paragraph>
            To make such a request, please write to us at
            contact@snslegalcounsellors.com with the subject line "Data Deletion
            Request" or "Opt-Out Request". We will process and confirm your
            request within 7 business days.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            5. Cookies and Analytics
          </Typography>
          <Typography variant="body1" paragraph>
            We respect your privacy. SNS Legal does not use cookies, analytics
            tools (such as Google Analytics), or tracking technologies on our
            website. Your interaction with our site is not monitored or analyzed
            beyond what is necessary to maintain secure functionality.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            6. Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            We implement appropriate and reasonable administrative, technical,
            and physical safeguards to protect your data from unauthorized
            access, use, or disclosure. This includes:
          </Typography>
          <Box component="ul" sx={{ ml: 3, mb: 2 }}>
            <li>Password-protected systems</li>
            <li>Limited access to data based on roles</li>
            <li>Encrypted communication platforms when appropriate</li>
          </Box>
          <Typography variant="body1" paragraph>
            Despite best practices, no online platform can guarantee absolute
            security. You are encouraged to share only information you're
            comfortable disclosing online.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            7. Third-Party Links
          </Typography>
          <Typography variant="body1" paragraph>
            Our website may contain links to third-party sites (such as legal
            resources or affiliated institutions). SNS Legal is not responsible
            for the privacy practices or content of these external websites.
            Users are encouraged to review the privacy policies of those sites
            before sharing any personal data.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            8. Children's Privacy
          </Typography>
          <Typography variant="body1" paragraph>
            Our services are not directed at children under the age of 18. We do
            not knowingly collect or store personal data of minors. If we become
            aware that we have unintentionally collected such data, we will take
            immediate steps to delete it.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            9. Changes to This Policy
          </Typography>
          <Typography variant="body1" paragraph>
            SNS Legal may update or revise this Privacy Policy from time to time
            to reflect legal, technological, or operational changes. Any updates
            will be posted on this page with the effective date updated
            accordingly. You are encouraged to review this page periodically for
            the latest information.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            10. Contact Information
          </Typography>
          <Typography variant="body1" paragraph>
            For any questions, feedback, or requests related to your data or
            this Privacy Policy, please contact us at:
          </Typography>
          <Box sx={{ ml: 2, mt: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              SNS Legal
            </Typography>
            <Typography variant="body1">
              No 386, 1st A Cross, OMBR Layout, near CMR Law College, Bangalore
              560043
            </Typography>
            <Typography variant="body1">
              Phone number: +91 9663038407
            </Typography>
            <Typography variant="body1">
              Email: contact@snslegalcounsellors.com
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ mt: 4, fontStyle: "italic" }}>
            Note: This Privacy Policy is applicable only to visitors and users
            of our website and does not cover any offline or third-party
            services, platforms, or systems.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPolicyPage;
