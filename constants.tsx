
import React from 'react';
import { PracticeArea, TeamMember, BlogPost } from './types';

export const DISCLAIMER_CONTENT = {
  title: "DISCLAIMER & CONFIRMATION",
  introduction: `As per the rules of the Bar Council of India, SNS Legal (hereinafter referred to as the "Firm") is not permitted to solicit work or advertise its services in any manner. By clicking "I Agree" below and accessing this website, the user expressly acknowledges and agrees to the following:`,
  points: [
    { title: "No Solicitation or Advertisement", content: "The user understands and acknowledges that there has been no form of advertisement, solicitation, personal communication, invitation, or inducement—either direct or indirect—by the Firm or any of its members with an intent to solicit legal work or offer legal services through this website." },
    { title: "Purpose of the Website", content: "The website is intended solely for the purpose of providing general information about the Firm, including but not limited to its areas of practice, its team of legal professionals, philosophy, approach, and recent engagements. It does not purport to be an advertisement or invitation for a client-lawyer relationship." },
    { title: "User Access and Intent", content: "The user is accessing this website of their own volition and has not been directed, invited, or prompted by the Firm or any of its associates. The purpose of such access is limited to gaining general information for personal, academic, or professional reference only." },
    { title: "Not Legal Advice", content: "The content available on this website—whether in the form of articles, updates, insights, or otherwise—is intended for informational purposes only and should not be construed as legal advice or opinion under any circumstances. Transmission, receipt, or use of this website does not create a lawyer-client relationship." },
    { title: "Limitation of Liability", content: "The Firm disclaims any and all liability arising out of any action taken by a user based on the material/information contained on this website. Users are strongly advised to seek appropriate legal counsel before acting upon any legal information provided herein." },
    { title: "Intellectual Property", content: "All content on this website, including text, graphics, logos, documents, publications, and other materials, is the exclusive intellectual property of the Firm unless otherwise indicated. Any unauthorized reproduction, distribution, or use of such material is strictly prohibited and may result in legal consequences." },
    { title: "External Links and References", content: "This website may contain links to third-party websites or resources for convenience. The Firm does not endorse or assume responsibility for the accuracy or reliability of any information, content, or services provided by such external sources." },
    { title: "Privacy and Confidentiality", content: "While the Firm respects the privacy of users, mere access to this website does not guarantee any confidentiality in communication. Users are advised not to send any confidential or sensitive information through the website without prior engagement." },
    { title: "Amendments and Updates", content: "The Firm reserves the right to modify, update, or revise the contents of this Disclaimer, the Terms of Use, and the Privacy Policy at any time without prior notice. Users are encouraged to periodically review this page for any changes." },
    { title: "Jurisdiction", content: "All disputes, if any, arising out of the use of this website shall be subject to the exclusive jurisdiction of the courts in India, and the laws applicable shall be those of the Republic of India." }
  ],
  conclusion: `By proceeding you agree and confirm that you have read and understood the above conditions and wish to proceed to access the website for informational purposes only. You further acknowledge that the Firm shall not be held responsible for any consequences of your use or reliance on the information provided herein.`,
  footer: `Please also read our [Terms of Use] and [Privacy Policy] before continuing.`
};


export const PRACTICE_AREAS: PracticeArea[] = [
  { id: 'civil-litigation', category: '1. Civil Litigation', title: 'Structured Dispute Resolution in Civil Law', content: 'Legal guidance is provided on matters involving property disputes, contractual breaches, tort claims, recovery proceedings, and succession issues. Representation extends before trial courts, appellate courts, and tribunals in disputes requiring interpretation of civil laws and procedures.' },
  { id: 'criminal-litigation', category: '2. Criminal Litigation', title: 'Representation in Proceedings Involving Criminal Allegations', content: 'Representation is extended in matters involving criminal prosecution and defence, including white-collar offences, fraud, breach of trust, and general penal provisions. Legal support covers stages from pre-trial investigation to bail, trial proceedings, and appellate challenges.' },
  { id: 'dispute-resolution', category: '3. Dispute Resolution', title: 'Advisory in Arbitration and Alternative Dispute Mechanisms', content: 'Advisory is provided on matters involving domestic and institutional arbitration, mediation, and conciliation. Support includes drafting of dispute resolution clauses, representation in arbitral forums, and negotiation processes aimed at efficient and enforceable outcomes.' },
  { id: 'corporate-advisory', category: '4. Corporate & Business Advisory', title: 'Legal Structuring in Commercial and Organisational Contexts', content: 'Advisory covers corporate structuring, regulatory compliance, shareholder relations, contractual drafting, and board governance. Legal guidance is also offered on commercial negotiations, statutory obligations under company law, and business risk assessments.' },
  { id: 'ip-suite', category: '5. Intellectual Property (IP) Suite', title: 'Advisory on Legal Protection of Creative and Technical Assets', content: 'Legal support includes advice on trademark registration, copyright enforcement, patent filing strategy, and design protection. Assistance is also provided in licensing arrangements, infringement actions, and alignment of intellectual property portfolios with business objectives.' },
  { id: 'startups-vc', category: '6. Startups & Venture Capital', title: 'Strategic Legal Advisory Across Investment and Growth Cycles', content: "Comprehensive advisory is provided on structuring, funding, and compliance for early-stage and growth-phase startups. Legal support includes entity formation, founder arrangements, cap table planning, term sheet negotiations, SAFE/convertible note documentation, and shareholders' agreements. Assistance is extended across seed, angel, and venture capital rounds, including due diligence coordination and rights structuring for investors. Guidance also covers regulatory compliance, ESOP design, governance frameworks, and strategic alignment with scaling objectives and investor expectations." },
  { id: 'real-estate', category: '7. Real Estate & RERA', title: 'Support on Property Transactions and Regulatory Compliance', content: 'Legal guidance is provided on real estate transactions including title due diligence, development agreements, joint ventures, lease documentation, and sale deeds. Advisory and representation are also offered under the RERA framework for developers and homebuyers.' },
  { id: 'family-disputes', category: '8. Family Disputes', title: 'Representation and Counsel in Personal Law Matters', content: 'Support is offered in legal proceedings relating to divorce, maintenance, child custody, domestic violence, succession, and inheritance. Representation spans family courts and civil courts, with attention to both procedural law and the personal nature of such disputes.' },
  { id: 'data-privacy', category: '9. Data Privacy & Security', title: 'Advisory on Data Governance, Regulatory Risk, and Compliance', content: 'Legal guidance is provided on the full spectrum of data protection frameworks, including the Digital Personal Data Protection (DPDP) Act, GDPR, and global regulatory standards. Advisory includes policy and compliance structuring, audit preparedness, internal data handling protocols, and cross-border data transfer mechanisms. Support extends to drafting of privacy notices, consent architecture, data processing agreements, and incident response strategies. Representation is also offered in regulatory interactions and enforcement proceedings involving data breaches or non-compliance.' },
];

export const TEAM_MEMBERS: TeamMember[] = [
    {
      name: "Adv Shashidhar V B",
      title: "Co-Founder & Senior Partner",
      imageUrl: "https://picsum.photos/seed/shashidhar/500/500",
      bio: [
        "Adv. Shashidhar V.B. is the Co-Founder and Senior Partner at SNS Legal, with a distinguished practice built on a unique combination of technical education, legal expertise, and a strong foundation in social sciences. He holds a degree in Engineering, followed by a Bachelor of Laws (LLB) and a Master's in Sociology, giving him a rare interdisciplinary perspective on law, society, and governance. His academic journey reflects a deep-rooted interest in understanding not just the mechanics of legal systems, but also their broader societal impact.",
        "In addition to his litigation practice, Adv. Shashidhar is actively involved in public policy research and dialogue, often collaborating on projects that explore the interface between law, governance, and social equity. This dual focus—on both legal practice and policy—enables him to bring a well-rounded, forward-thinking approach to his work.",
        "Adv. Shashidhar's core areas of practice include civil and criminal litigation, with extensive experience representing clients before High Courts and trial courts across Karnataka. He has developed a robust litigation portfolio that includes complex civil disputes, property and inheritance matters, contractual issues, and serious criminal defence cases. His legal advocacy is distinguished by a blend of thorough legal analysis, strategic foresight, and a deep understanding of procedural law.",
        "Known for his strong courtroom presence and methodical preparation, he is committed to representing his clients' interests with both rigour and integrity. He approaches each matter with meticulous attention to detail, ensuring that no legal or factual nuance is overlooked. Whether handling contentious property disputes or defending clients in high-stakes criminal matters, he strives to deliver outcomes that are both legally sound and practically meaningful.",
        "Adv. Shashidhar is also recognised for offering personalised legal solutions, grounded in careful listening and tailored strategy. His ability to connect with clients, understand their specific concerns, and translate them into actionable legal pathways is central to his practice. He is deeply committed to upholding the values of professionalism, diligence, and client-focused service, making him a trusted counsel for individuals and businesses navigating complex legal issues.",
        "As a co-founder, he plays a vital role in shaping the firm's litigation strategy and mentoring the next generation of legal professionals at SNS Legal. His work reflects a balance of traditional legal expertise and contemporary legal thinking, making him a valuable asset to both the firm and the clients it serves."
      ]
    },
    {
      name: "Adv Sanjana H F",
      title: "Co-Founder & Senior Partner",
      imageUrl: "", // Left blank as requested
      bio: [
        "Adv. Sanjana H. F. is the Co-Founder and Senior Partner at SNS Legal, where she brings a multidisciplinary approach to legal practice, rooted in rigorous academic training and practical insight. After completing her law degree, she pursued advanced studies in Business Law from leading institutions including the National Law School of India University (NLSIU), Bangalore. Her educational and professional journey reflects a strong alignment with the firm's focus on contemporary, research-driven legal services.",
        "Sanjana's core areas of practice include general litigation, corporate and business law, and data protection, with active involvement in both contentious and advisory roles. She has handled a wide range of civil and commercial disputes before various courts and tribunals, where her approach combines procedural clarity with a strategic understanding of each case's commercial or personal implications. Her litigation experience is complemented by consistent engagement in corporate advisory work, where she assists clients in matters such as contract structuring, compliance frameworks, risk management, and entity governance.",
        "Over time, she has developed specialised expertise in data privacy and data security law, an area in which she has built a strong portfolio of advisory services. She regularly counsels clients on the Digital Personal Data Protection (DPDP) Act, the GDPR, the PDPL and other international privacy regimes. Her work spans the design and implementation of internal compliance systems, drafting of privacy and data-sharing policies, cross-border data transfer structuring, and assistance in responding to regulatory audits, enforcement actions, and incident management.",
        "In addition to her primary areas of practice, Sanjana is also involved in building the IP suite with patent-related advisory, particularly in helping clients align technical disclosures with legal protections, advising on filing strategies, and preparing inventor agreements—especially for businesses operating in technology-driven sectors.",
        "Alongside her legal practice, Adv. Sanjana H. F. maintains a strong interest in public policy and regulatory affairs, especially where they intersect with privacy, innovation, and governance. She actively engages in research and dialogue on evolving legal standards, contributing to the firm's continuous alignment with emerging areas of law and global regulatory developments.",
        "As a senior partner, she plays a key role in aligning the firm's practice with emerging areas of law and regulatory change, contributing both as a strategist and a mentor. Her approach is marked by rigorous research, structured problem-solving, and a clear focus on aligning legal solutions with business objectives. She continues to advise a diverse set of clients—from startups to established enterprises—delivering legal guidance that is not only accurate but also commercially meaningful."
      ]
    }
];

export const BLOG_POSTS: BlogPost[] = [
    {
      id: "understanding-contract-law",
      title: "Understanding Contract Law",
      quote: "In a society where words form the foundation of trust, contracts are the promises cast in stone.",
      content: (
        <div className="space-y-6">
          <p>Contracts are the backbone of modern civilised society. They are the invisible threads that bind individuals, businesses, and even governments to their word. Whether it is a simple agreement between two friends to share an apartment, or a multi-crore business deal between corporate giants, contracts define and regulate these relationships in a structured, enforceable way. In the Indian legal context, contracts are not just important—they are essential for economic stability, business confidence, and the protection of individual rights.</p>
          <h3 className="text-xl font-semibold text-brand-primary">Understanding the Concept of a Contract</h3>
          <p>In the simplest terms, a contract is an agreement that is legally enforceable. According to Section 2(h) of the Indian Contract Act, 1872, “an agreement enforceable by law is a contract.” This means that not all agreements are contracts—only those that meet the criteria set out by law.</p>
          <p>To be legally valid, a contract must contain the following elements:</p>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li><strong>Offer and Acceptance:</strong> One party must make a clear offer, and the other must accept it unequivocally.</li>
            <li><strong>Lawful Consideration:</strong> There must be something of value exchanged between the parties.</li>
            <li><strong>Capacity to Contract:</strong> Both parties must be competent (not minors, not of unsound mind, etc.).</li>
            <li><strong>Free Consent:</strong> Consent should not be obtained through coercion, undue influence, fraud, misrepresentation, or mistake.</li>
            <li><strong>Lawful Object:</strong> The purpose of the contract must be legal and not against public policy.</li>
          </ol>
          <p>These foundational elements serve to filter out unreliable or exploitative arrangements and allow the courts to step in when one party defaults.</p>

          <h3 className="text-xl font-semibold text-brand-primary">The Indian Contract Act, 1872: The Legal Framework</h3>
          <p>The Indian Contract Act was enacted before independence and still forms the primary legislation governing contracts in India. Divided into two parts, the Act covers:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
              <li>General Principles relating to contracts (Sections 1 to 75)</li>
              <li>Special kinds of contracts like contracts relating to indemnity, guarantee, bailment, pledge, and agency.</li>
          </ul>
          <p>This Act ensures that any individual or business entering into a contract has a clearly defined set of rights and obligations. It has stood the test of time and been interpreted by courts across the country, making it both robust and adaptable to modern needs.</p>
          
          <h3 className="text-xl font-semibold text-brand-primary">Evolving Role of Contracts in India's Growing Economy</h3>
          <p>With India's growing digital and entrepreneurial ecosystem, contracts are becoming more complex, yet more crucial. Startups raise capital through convertible notes and shareholder agreements. Service companies enter into non-disclosure agreements (NDAs) and software licensing arrangements. Freelancers use contracts to protect their intellectual property and get timely payments.</p>
          <p>In recent years, India has also witnessed a surge in e-contracts—agreements made and signed electronically. The Information Technology Act, 2000 provides legal recognition to electronic contracts and digital signatures. This has made contract execution faster and more efficient, especially during the post-COVID digital transformation.</p>

          <h3 className="text-xl font-semibold text-brand-primary">Conclusion: Strengthening the Culture of Contractual Awareness</h3>
          <p>In India, we are slowly moving towards a more contract-conscious culture. Yet, there is a long way to go. People often hesitate to formalise agreements because they feel it's too legalistic, too expensive, or "not needed between friends." But the truth is, a contract doesn't mean a lack of trust—it means a mutual desire to avoid misunderstandings and protect each other's interests.</p>
          <p className="font-semibold">Let us move toward a future where every promise is protected, every deal is dignified, and every handshake has a legal spine behind it. After all, in a society governed by law, a well-drafted contract is not just paperwork—it is peace of mind.</p>
        </div>
      )
    },
    {
      id: "navigating-property-disputes",
      title: "Navigating Property Disputes Under Indian Law",
      quote: "Property is not just land. It is memory, value, legacy—and sometimes, conflict.",
      content: (
        <div className="space-y-6">
            <p>Property in India holds a weight that extends far beyond monetary worth. For many families, a piece of land or an inherited home represents decades—sometimes centuries—of emotional and cultural history. It is where memories are made, generations grow, and legacies are preserved. But unfortunately, it is also where conflicts often arise. Property disputes are among the most sensitive and emotionally charged legal challenges people face in India.</p>
            <p>From disagreements between siblings over ancestral land, to disputes between landlords and tenants, or even between homebuyers and developers—property-related matters are complex, personal, and often prolonged. Understanding how the legal system approaches these disputes can be both empowering and grounding for individuals trying to navigate them.</p>

            <h3 className="text-xl font-semibold text-brand-primary">Types of Property Disputes</h3>
            <p>While the nature of each dispute is unique, many fall into familiar categories:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Inheritance and partition conflicts:</strong> These typically involve siblings or extended family members who claim a share in family property.</li>
                <li><strong>Title and ownership issues:</strong> When two or more parties claim ownership, often due to conflicting documents or fraudulent transfers.</li>
                <li><strong>Encroachment and possession-related problems:</strong> This could be as simple as a neighbour extending their boundary wall, or as complex as land grabbing.</li>
                <li><strong>Builder-buyer disputes:</strong> A growing category, especially in urban centres, involving delayed possession, deviation from approved plans, or failure to register sale deeds.</li>
                <li><strong>Landlord-tenant disagreements:</strong> Whether about unpaid rent, unauthorised occupation, or eviction, such disputes can escalate quickly.</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-primary">Legal Paths and Remedies</h3>
            <p>Property disputes in India are typically resolved through civil courts. Where ownership is unclear or possession has been disturbed, a person may approach the court to seek declaration of rights or restoration of possession. In cases involving family disputes, a partition suit is often filed to determine and divide each member's rightful share.</p>
            <p>In cases involving a builder or developer, especially when the promises made are not fulfilled, homebuyers can now approach real estate regulators (under RERA) for quicker remedies, including refund or possession. This has been a game-changer for many who previously had no recourse except lengthy consumer litigation.</p>
            
            <h3 className="text-xl font-semibold text-brand-primary">The Emotional Landscape of Property Litigation</h3>
            <p>Unlike purely commercial disputes, property matters often carry emotional weight. A sibling who's lived in the family home for years may feel a deeper attachment than one who hasn't. A parent might have made verbal promises that were never recorded. And a tenant who has occupied a space for decades might feel a sense of ownership, even if the law says otherwise.</p>
            <p>This emotional dimension means that parties are often unwilling to compromise, turning small misunderstandings into drawn-out battles. The human cost of such litigation—strained relationships, financial stress, and years lost in court—is significant.</p>

            <h3 className="text-xl font-semibold text-brand-primary">Conclusion</h3>
            <p>Property disputes are rarely just legal—they are personal, emotional, and often deeply rooted in trust, tradition, and time. In India, where family bonds and land ownership intersect so closely, such conflicts demand not just legal expertise, but also empathy, timing, and a willingness to engage with both documents and people.</p>
            <p className="font-semibold">Whether the issue is ancestral property, real estate delay, or tenancy, approaching the matter early—with a clear head, reliable documents, and grounded legal advice—can help resolve disputes before they consume years and relationships. After all, property may be inherited or purchased, but peace of mind is something one must actively build and preserve.</p>
        </div>
      )
    }
  ];
