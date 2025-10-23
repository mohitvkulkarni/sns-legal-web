import React from "react";
import { Box, Container, Typography } from "@mui/material";

const TermsOfUsePage: React.FC = () => {
  return (
    <Box sx={{ pt: { xs: 12, md: 14 }, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ textAlign: "center", mb: 4 }}
        >
          Terms of Use
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", mb: 6, color: "text.secondary" }}
        >
          Last Updated: 1st July 2025
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", mb: 6, color: "text.secondary" }}
        >
          Firm: SNS Legal
        </Typography>

        <Box sx={{ maxWidth: "800px", mx: "auto", space: 4 }}>
          <Typography variant="body1" paragraph>
            Welcome to the official website of SNS Legal ("we," "our," or "the
            Firm"). By accessing, browsing, or using our website (the "Site"),
            you agree to comply with and be bound by the following Terms of Use.
            These terms are intended to set clear expectations for your
            engagement with the Site. If you do not agree with any part of these
            terms, we respectfully ask that you refrain from using the Site.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            1. No Attorney-Client Relationship
          </Typography>
          <Typography variant="body1" paragraph>
            Please note that visiting or using this website does not create an
            attorney-client relationship between you and SNS Legal or any of its
            lawyers. The information provided on this Site is for general
            informational purposes only and is not intended to constitute legal
            advice or solicit any legal business. An attorney-client
            relationship can only be formed through a signed written agreement
            after direct communication and mutual consent. Do not consider any
            content on this website as a substitute for personalized legal
            counsel from qualified professionals.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            2. Confidentiality Notice
          </Typography>
          <Typography variant="body1" paragraph>
            We advise that you do not share any confidential, sensitive, or
            privileged information with us through the contact forms or via
            email prior to establishing a formal attorney-client relationship.
            Any information submitted via this website without such a
            relationship will not be treated as confidential or protected under
            attorney-client privilege. SNS Legal takes confidentiality very
            seriously once formally engaged, but cannot accept responsibility
            for unsolicited information sent in advance of engagement.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            3. Intellectual Property Rights
          </Typography>
          <Typography variant="body1" paragraph>
            All content available on this Site—including, but not limited to,
            text, logos, graphics, downloadable documents, legal updates, and
            page layout—is the exclusive property of SNS Legal unless otherwise
            stated. This material is protected under intellectual property laws,
            including copyright, trademark, and design law. You may not
            reproduce, republish, transmit, distribute, or exploit any material
            from this Site for commercial or public purposes without express
            prior written permission from SNS Legal.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            4. Third-Party Websites and Links
          </Typography>
          <Typography variant="body1" paragraph>
            Our Site may occasionally contain links to third-party websites or
            platforms for informational purposes or resource referencing. These
            are included solely for convenience and do not imply any
            endorsement, approval, or control by SNS Legal. We are not
            responsible for the content, security, or practices of any linked
            websites. Accessing third-party sites is at your own risk, and we
            encourage users to review their respective terms and policies before
            engaging with those sites.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            5. Accuracy and Timeliness of Content
          </Typography>
          <Typography variant="body1" paragraph>
            We strive to ensure that the information on our Site is accurate,
            up-to-date, and relevant, especially in relation to legal
            developments. However, due to the dynamic nature of laws and
            regulations, some content may become outdated or no longer reflect
            current legal standards. SNS Legal makes no warranties or
            representations as to the completeness, accuracy, or reliability of
            any content. Users are encouraged to consult a qualified legal
            advisor before acting on any information found on this Site.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            6. Limitation of Liability
          </Typography>
          <Typography variant="body1" paragraph>
            To the fullest extent permitted by applicable law, SNS Legal shall
            not be liable for any direct, indirect, incidental, consequential,
            or punitive damages arising out of your use of, or inability to use,
            the Site or its content. This includes, but is not limited to,
            reliance on information on the Site, third-party links, technical
            issues, or data inaccuracies. Use of this Site is at your sole risk,
            and it is your responsibility to evaluate the accuracy,
            completeness, and usefulness of any information provided.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            7. Privacy and Data Use
          </Typography>
          <Typography variant="body1" paragraph>
            We respect your privacy. Our Privacy Policy explains in detail how
            we collect, store, use, and protect any personal information you may
            provide while using the Site. By continuing to access and use this
            Site, you consent to the practices described in our Privacy Policy.
            If you have any concerns or wish to learn more about how your data
            is handled, please feel free to contact us.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            8. Modifications to Terms
          </Typography>
          <Typography variant="body1" paragraph>
            SNS Legal reserves the right to change, modify, or update these
            Terms of Use at any time without prior notice. Such changes will
            become effective immediately upon posting on this page. We encourage
            you to review these Terms periodically to stay informed about any
            updates. Continued use of the Site after modifications signifies
            your acceptance of the revised Terms.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            9. Jurisdiction and Governing Law
          </Typography>
          <Typography variant="body1" paragraph>
            These Terms of Use and any disputes arising out of or related to
            this Site shall be governed by and construed in accordance with the
            laws of the Republic of India, specifically under the jurisdiction
            of the courts of Bengaluru, Karnataka, unless otherwise agreed upon
            in writing. By using this Site, you agree to submit to the exclusive
            jurisdiction of these courts for the resolution of any legal
            matters.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 4, mb: 2, color: "primary.main" }}
          >
            10. Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about these Terms of Use, or if you need
            further assistance, please contact us at:
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
        </Box>
      </Container>
    </Box>
  );
};

export default TermsOfUsePage;
