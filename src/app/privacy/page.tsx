import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { studio } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SATEAM Creative Studio collects, uses, and protects your information.",
};

const sections: LegalSection[] = [
  {
    heading: "Who we are",
    body: (
      <>
        <p>
          SATEAM Creative Studio (&ldquo;SATEAM&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a creative studio based in{" "}
          {studio.location}. This Privacy Policy explains how we handle
          information collected through our website, project enquiries, and
          client engagements.
        </p>
        <p>
          If you have any questions about this policy, please contact us at{" "}
          <a
            className="text-violet-700 hover:underline"
            href={`mailto:${studio.email}`}
          >
            {studio.email}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    heading: "Information we collect",
    body: (
      <>
        <p>We may collect the following categories of information:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Contact details</strong> you submit voluntarily — name,
            email address, phone number, company name, project brief.
          </li>
          <li>
            <strong>Usage data</strong> automatically collected when you visit
            our website — pages viewed, referring URLs, browser, device, and
            approximate location based on IP address.
          </li>
          <li>
            <strong>Project assets</strong> shared during an engagement, such
            as brand guidelines, footage, photography, and other materials
            covered by a separate engagement agreement.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "How we use information",
    body: (
      <ul className="list-disc pl-6 space-y-2">
        <li>To respond to your enquiry and discuss a potential engagement.</li>
        <li>To deliver, manage, and improve the services you engage us for.</li>
        <li>
          To send occasional updates about our work, only when you have opted
          in.
        </li>
        <li>
          To improve the performance and security of our website and tooling.
        </li>
        <li>To comply with applicable laws and regulations.</li>
      </ul>
    ),
  },
  {
    heading: "Sharing your information",
    body: (
      <>
        <p>
          We do not sell your personal information. We may share information
          with trusted third parties who help us operate our business — for
          example, email service providers, hosting platforms, and project
          collaborators — and only to the extent required to perform their
          function.
        </p>
        <p>
          We may also disclose information when required by law or to protect
          our legal rights.
        </p>
      </>
    ),
  },
  {
    heading: "Cookies and analytics",
    body: (
      <p>
        Our website may use cookies and basic analytics to understand how
        visitors interact with our content. You can disable cookies through
        your browser settings. Disabling cookies will not affect your ability
        to view the content of this site.
      </p>
    ),
  },
  {
    heading: "Data retention",
    body: (
      <p>
        We keep personal information only for as long as necessary for the
        purposes described in this policy, or as required by law. Project
        assets and deliverables are retained according to the terms of the
        applicable engagement agreement.
      </p>
    ),
  },
  {
    heading: "Your rights",
    body: (
      <p>
        You may request access to, correction of, or deletion of your personal
        information at any time by emailing{" "}
        <a
          className="text-violet-700 hover:underline"
          href={`mailto:${studio.email}`}
        >
          {studio.email}
        </a>
        . We will respond within a reasonable timeframe consistent with
        applicable law.
      </p>
    ),
  },
  {
    heading: "Updates to this policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. The latest version
        will always be posted on this page with an updated effective date.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="May 2026"
      sections={sections}
    />
  );
}
