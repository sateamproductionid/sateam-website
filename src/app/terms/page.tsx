import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { studio } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of the SATEAM Creative Studio website and services.",
};

const sections: LegalSection[] = [
  {
    heading: "Acceptance of terms",
    body: (
      <p>
        By accessing or using the SATEAM Creative Studio website
        (sateamcreative.com) and any related services, you agree to be bound
        by these Terms of Service. If you do not agree, please do not use the
        site.
      </p>
    ),
  },
  {
    heading: "Use of the website",
    body: (
      <>
        <p>
          The content on this website is provided for general information about
          SATEAM Creative Studio and its work. You may browse and share links
          to our pages for personal, non-commercial purposes.
        </p>
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the site in any way that violates applicable laws.</li>
          <li>
            Attempt to gain unauthorised access to any part of the site, its
            servers, or related infrastructure.
          </li>
          <li>
            Reproduce, distribute, or display content from this site without
            our written permission, except where expressly allowed.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "Intellectual property",
    body: (
      <p>
        All content on this website — including text, graphics, logos,
        photography, video, and the SATEAM identity — is owned by SATEAM
        Creative Studio or its licensors and is protected by copyright,
        trademark, and other applicable laws. Project case studies shown on
        the site remain subject to any confidentiality or usage terms agreed
        with the respective clients.
      </p>
    ),
  },
  {
    heading: "Project engagements",
    body: (
      <p>
        Any service engagement between SATEAM Creative Studio and a client is
        governed by a separate written agreement that defines scope, pricing,
        deliverables, timelines, intellectual property assignment, and
        warranties. These Terms of Service do not replace or modify any such
        agreement.
      </p>
    ),
  },
  {
    heading: "Third-party links",
    body: (
      <p>
        This site may include links to third-party websites or services. We
        are not responsible for the content, policies, or practices of those
        third parties.
      </p>
    ),
  },
  {
    heading: "Disclaimer of warranties",
    body: (
      <p>
        The website is provided on an &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; basis without warranties of any kind, express or
        implied. We do not guarantee that the site will always be available,
        uninterrupted, or free from errors.
      </p>
    ),
  },
  {
    heading: "Limitation of liability",
    body: (
      <p>
        To the maximum extent permitted by law, SATEAM Creative Studio will
        not be liable for any indirect, incidental, special, consequential, or
        punitive damages arising out of your use of this website.
      </p>
    ),
  },
  {
    heading: "Governing law",
    body: (
      <p>
        These Terms of Service are governed by the laws of the Republic of
        Indonesia. Any dispute arising from or related to the website shall be
        resolved in the courts located in {studio.location}.
      </p>
    ),
  },
  {
    heading: "Changes to these terms",
    body: (
      <p>
        We may update these Terms of Service from time to time. The latest
        version will always be posted on this page with an updated effective
        date. Your continued use of the site after any change constitutes your
        acceptance of the new terms.
      </p>
    ),
  },
  {
    heading: "Contact",
    body: (
      <p>
        Questions about these Terms? Email us at{" "}
        <a
          className="text-violet-700 hover:underline"
          href={`mailto:${studio.email}`}
        >
          {studio.email}
        </a>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="May 2026"
      sections={sections}
    />
  );
}
