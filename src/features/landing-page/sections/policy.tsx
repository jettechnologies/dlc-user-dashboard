/* eslint-disable react/no-unescaped-entities */
import { MinifiedContent } from "../components"
import Image from "next/image"
import Link from "next/link"

const PrivacyPolicyPage = () => {
	return (
		<div className="font-poppins bg-light-yellow-200">
			<section className="relative h-[450px] w-full overflow-hidden">
				<Image
					src="/images/policy-banner.png"
					alt="Privacy Policy Banner"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
				<div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
					<h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
						Privacy Policy
					</h1>
					<p className="mt-4 max-w-xl text-base text-white/80">
						Learn how we collect, store, and protect your data to maintain trust
						and transparency.
					</p>
				</div>
			</section>

			{/* Main Content */}
			<div className="mx-auto max-w-4xl px-4 py-16 text-gray-700 leading-relaxed ">
				<div className="prose prose-blue max-w-none prose-headings:font-semibold prose-p:text-gray-700">
					<p>
						This Privacy Policy describes Our policies and procedures on the
						collection, use, and disclosure of Your information when You use the
						Service and tells You about Your privacy rights and how the law
						protects You.
					</p>

					<MinifiedContent title="Interpretation and Definitions">
						<h3 className="mb-2 text-lg font-semibold text-gray-700">
							Interpretation
						</h3>
						<p className="mb-4">
							The words of which the initial letter is capitalized have meanings
							defined under the following conditions. The following definitions
							shall have the same meaning regardless of whether they appear in
							singular or plural.
						</p>

						<h3 className="mb-2 text-lg font-semibold text-gray-700">
							Definitions
						</h3>
						<p className="mb-2">For the purposes of this Privacy Policy:</p>
						<ul className="mb-4 list-disc space-y-2 pl-5">
							<li>
								<strong>Account</strong> means a unique account created for You
								to access our Service or parts of our Service.
							</li>
							<li>
								<strong>Affiliate</strong> means an entity that controls, is
								controlled by or is under common control with a party, where
								"control" means ownership of 50% or more of the shares, equity
								interest, or other securities entitled to vote for the election
								of directors or other managing authority.
							</li>
							<li>
								<strong>Company</strong> (referred to as either "the Company",
								"We", "Us" or "Our" in this Agreement) refers to MARTAD EDU $
								SKILLS, 3B ALEGBE CLOSE, MENDE, MARYLAND, LAGOS, NIGERIA.
							</li>
							<li>
								<strong>Cookies</strong> are small files that are placed on Your
								computer, mobile device, or any other device by a website,
								containing the details of Your browsing history on that website
								among its many uses.
							</li>
							<li>
								<strong>Country</strong> refers to: Nigeria
							</li>
							<li>
								<strong>Device</strong> means any device that can access the
								Service such as a computer, a cellphone, or a digital tablet.
							</li>
							<li>
								<strong>Personal Data</strong> is any information that relates
								to an identified or identifiable individual.
							</li>
							<li>
								<strong>Service</strong> refers to the Website.
							</li>
							<li>
								<strong>Service Provider</strong> means any natural or legal
								person who processes the data on behalf of the Company.
							</li>
							<li>
								<strong>Website</strong> refers to:
								<Link href="/" className="text-blue-600 hover:underline">
									https://digitallearningcircle.com
								</Link>
							</li>
							<li>
								<strong>You</strong> means the individual accessing or using the
								Service, or the company, or other legal entity on behalf of
								which such individual is accessing or using the Service, as
								applicable.
							</li>
						</ul>
					</MinifiedContent>

					<MinifiedContent title="Collecting and Using Your Personal Data">
						<h3 className="mb-2 text-lg font-semibold text-gray-700">
							Types of Data Collected
						</h3>

						<h4 className="mb-2 font-medium text-gray-700">Personal Data</h4>
						<p className="mb-2">
							While using Our Service, We may ask You to provide Us with certain
							personally identifiable information that can be used to contact or
							identify You. Personally identifiable information may include, but
							is not limited to:
						</p>
						<ul className="mb-4 list-disc pl-5">
							<li>Email address</li>
							<li>First name and last name</li>
							<li>Phone number</li>
							<li>Usage Data</li>
						</ul>

						<h4 className="mb-2 font-medium text-gray-700">Usage Data</h4>
						<p className="mb-2">
							Usage Data is collected automatically when using the Service.
						</p>
						<p className="mb-2">
							Usage Data may include information such as Your Device's Internet
							Protocol address (e.g. IP address), browser type, browser version,
							the pages of our Service that You visit, the time and date of Your
							visit, the time spent on those pages, unique device identifiers
							and other diagnostic data.
						</p>
						<p className="mb-2">
							When You access the Service by or through a mobile device, We may
							collect certain information automatically, including, but not
							limited to, the type of mobile device You use, Your mobile
							device's unique ID, the IP address of Your mobile device, Your
							mobile operating system, the type of mobile Internet browser You
							use, unique device identifiers and other diagnostic data.
						</p>
						<p className="mb-4">
							We may also collect information that Your browser sends whenever
							You visit our Service or when You access the Service by or through
							a mobile device.
						</p>

						<h4 className="mb-2 font-medium text-gray-700">
							Tracking Technologies and Cookies
						</h4>
						<p className="mb-2">
							We use Cookies and similar tracking technologies to track the
							activity on Our Service and store certain information. Tracking
							technologies used are beacons, tags, and scripts to collect and
							track information and to improve and analyze Our Service. The
							technologies We use may include:
						</p>
						<ul className="mb-4 list-disc pl-5">
							<li>
								<strong>Cookies or Browser Cookies.</strong> A cookie is a small
								file placed on Your Device. You can instruct Your browser to
								refuse all Cookies or to indicate when a cookie is being sent.
								However, if You do not accept Cookies, You may not be able to
								use some parts of our Service.
							</li>
							<li>
								<strong>Web Beacons.</strong> Certain sections of our Service
								and our emails may contain small electronic files known as web
								beacons that permit the Company to count users who have visited
								those pages or opened an email and for other related website
								statistics.
							</li>
						</ul>

						<p className="mb-2">
							Cookies can be "Persistent" or "Session" Cookies. We use both
							Session and Persistent Cookies for the purposes set out below:
						</p>
						<ul className="mb-4 list-disc pl-5">
							<li>
								<strong>Necessary / Essential Cookies</strong>
								<br />
								Type: Session Cookies
								<br />
								Purpose: These Cookies are essential to provide You with
								services available through the Website.
							</li>
							<li>
								<strong>Cookies Policy / Notice Acceptance Cookies</strong>
								<br />
								Type: Persistent Cookies
								<br />
								Purpose: These Cookies identify if users have accepted the use
								of cookies on the Website.
							</li>
							<li>
								<strong>Functionality Cookies</strong>
								<br />
								Type: Persistent Cookies
								<br />
								Purpose: These Cookies allow us to remember choices You make
								when You use the Website.
							</li>
						</ul>
					</MinifiedContent>

					<MinifiedContent title="Use of Your Personal Data">
						<p className="mb-2">
							The Company may use Personal Data for the following purposes:
						</p>
						<ul className="mb-4 list-disc space-y-2 pl-5">
							<li>
								To provide and maintain our Service, including monitoring the
								usage of our Service.
							</li>
							<li>
								To manage Your Account: to manage Your registration as a user of
								the Service.
							</li>
							<li>
								For the performance of a contract: the development, compliance,
								and undertaking of the purchase contract for the products,
								items, or services You have purchased or of any other contract
								with Us through the Service.
							</li>
							<li>
								To contact You: To contact You by email, telephone calls, SMS,
								or other equivalent forms of electronic communication.
							</li>
							<li>
								To provide You with news, special offers and general information
								about other goods, services, and events that we offer.
							</li>
							<li>
								To manage Your requests: To attend and manage Your requests to
								Us.
							</li>
							<li>
								For business transfers: We may use Your information to evaluate
								or conduct a merger, divestiture, restructuring, reorganization,
								dissolution, or other sale or transfer of some or all of Our
								assets.
							</li>
							<li>
								For other purposes: We may use Your information for other
								purposes, such as data analysis, identifying usage trends, and
								improving our Service.
							</li>
						</ul>
					</MinifiedContent>

					<MinifiedContent title="Retention of Your Personal Data">
						<p className="mb-2">
							The Company will retain Your Personal Data only for as long as is
							necessary for the purposes set out in this Privacy Policy. We will
							retain and use Your Personal Data to the extent necessary to
							comply with our legal obligations, resolve disputes, and enforce
							our legal agreements and policies.
						</p>
						<p className="mb-4">
							The Company will also retain Usage Data for internal analysis
							purposes. Usage Data is generally retained for a shorter period of
							time, except when this data is used to strengthen the security or
							to improve the functionality of Our Service, or We are legally
							obligated to retain this data for longer time periods.
						</p>
					</MinifiedContent>

					<MinifiedContent title="Transfer of Your Personal Data">
						<p className="mb-2">
							Your information, including Personal Data, is processed at the
							Company's operating offices and in any other places where the
							parties involved in the processing are located. It means that this
							information may be transferred to — and maintained on — computers
							located outside of Your state, province, country or other
							governmental jurisdiction where the data protection laws may
							differ from those from Your jurisdiction.
						</p>
						<p className="mb-2">
							Your consent to this Privacy Policy followed by Your submission of
							such information represents Your agreement to that transfer.
						</p>
						<p className="mb-4">
							The Company will take all steps reasonably necessary to ensure
							that Your data is treated securely and in accordance with this
							Privacy Policy and no transfer of Your Personal Data will take
							place to an organization or a country unless there are adequate
							controls in place including the security of Your data and other
							personal information.
						</p>
					</MinifiedContent>

					<MinifiedContent title="Delete Your Personal Data">
						<p className="mb-2">
							You have the right to delete or request that We assist in deleting
							the Personal Data that We have collected about You.
						</p>
						<p className="mb-2">
							Our Service may give You the ability to delete certain information
							about You from within the Service.
						</p>
						<p className="mb-2">
							You may update, amend, or delete Your information at any time by
							signing in to Your Account if you have one, and visiting the
							account settings section that allows you to manage Your personal
							information. You may also contact Us to request access to,
							correct, or delete any personal information that You have provided
							to Us.
						</p>
						<p className="mb-4">
							Please note, however, that We may need to retain certain
							information when we have a legal obligation or lawful basis to do
							so.
						</p>
					</MinifiedContent>

					<MinifiedContent title="Disclosure of Your Personal Data">
						<h3 className="mb-2 text-lg font-semibold text-gray-700">
							Business Transactions
						</h3>
						<p className="mb-4">
							If the Company is involved in a merger, acquisition, or asset
							sale, Your Data may be transferred. We will provide notice before
							Your Personal Data is transferred and becomes subject to a
							different Privacy Policy.
						</p>

						<h3 className="mb-2 text-lg font-semibold text-gray-700">
							Law enforcement
						</h3>
						<p className="mb-4">
							Under certain circumstances, the Company may be required to
							disclose Your Data if required to do so by law or in response to
							valid requests by public authorities (e.g. a court or a government
							agency).
						</p>

						<h3 className="mb-2 text-lg font-semibold text-gray-700">
							Other legal requirements
						</h3>
						<p className="mb-2">
							The Company may disclose Your Data in the good faith belief that
							such action is necessary to:
						</p>
						<ul className="mb-4 list-disc pl-5">
							<li>Comply with a legal obligation</li>
							<li>Protect and defend the rights or property of the Company</li>
							<li>
								Prevent or investigate possible wrongdoing in connection with
								the Service
							</li>
							<li>
								Protect the personal safety of Users of the Service or the
								public
							</li>
							<li>Protect against legal liability</li>
						</ul>
					</MinifiedContent>

					<MinifiedContent title="Security of Your Data">
						<p className="mb-4">
							The security of Your Data is important to Us, but remember that no
							method of transmission over the Internet, or method of electronic
							storage is 100% secure. While We strive to use commercially
							acceptable means to protect Your Data, We cannot guarantee its
							absolute security.
						</p>
					</MinifiedContent>

					<MinifiedContent title="Children's Privacy">
						<p className="mb-2">
							Our Service does not address anyone under the age of 13. We do not
							knowingly collect personally identifiable information from anyone
							under the age of 13. If You are a parent or guardian and You are
							aware that Your child has provided Us with Personal Data, please
							contact Us.
						</p>
						<p className="mb-4">
							If We need to rely on consent as a legal basis for processing Your
							information and Your country requires consent from a parent, We
							may require Your parent's consent before We collect and use that
							information.
						</p>
					</MinifiedContent>

					<MinifiedContent title="Links to Other Websites">
						<p className="mb-2">
							Our Service may contain links to other websites that are not
							operated by Us. If You click on a third-party link, You will be
							directed to that third-party's site. We strongly advise You to
							review the Privacy Policy of every site You visit.
						</p>
						<p className="mb-4">
							We have no control over and assume no responsibility for the
							content, privacy policies, or practices of any third-party sites
							or services.
						</p>
					</MinifiedContent>

					<MinifiedContent title="Changes to this Privacy Policy">
						<p className="mb-2">
							We may update Our Privacy Policy from time to time. We will notify
							You of any changes by posting the new Privacy Policy on this page.
						</p>
						<p className="mb-2">
							We will let You know via email and/or a prominent notice on Our
							Service, before the change becomes effective and update the "Last
							updated" date at the top of this Privacy Policy.
						</p>
						<p className="mb-4">
							You are advised to review this Privacy Policy periodically for any
							changes. Changes to this Privacy Policy are effective when they
							are posted on this page.
						</p>
					</MinifiedContent>

					<MinifiedContent title="Contact Us">
						<p className="mb-4">
							If you have any questions about this Privacy Policy, You can
							contact us by visiting this page on our website:{" "}
							<Link href="/contact" className="text-blue-600 hover:underline">
								https://digitallearningcircle.com
							</Link>
						</p>
					</MinifiedContent>
				</div>
			</div>
		</div>
	)
}

export default PrivacyPolicyPage
