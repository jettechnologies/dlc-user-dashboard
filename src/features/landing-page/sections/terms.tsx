"use client"

import { MinifiedContent } from "../components"
import Image from "next/image"
import Link from "next/link"

export default function TermsAndConditions() {
	return (
		<main className="font-poppins bg-light-yellow-200">
			{/* Banner */}

			<section className="relative h-[450px] w-full">
				<Image
					src="/images/terms_conditions.png"
					alt="Terms and Conditions"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 z-30 flex items-center justify-center bg-black opacity-50">
					<h1 className="px-4 text-center text-3xl font-bold text-white md:text-4xl">
						Terms and Conditions
					</h1>
				</div>
			</section>

			{/* Content */}
			<div className="mx-auto max-w-4xl px-4 py-16 text-gray-700 leading-relaxed ">
				<MinifiedContent title="I. Introduction and Contracting Parties">
					<p className="mb-4">
						These Terms and Conditions shall apply to all aspects of Digital
						Learnign Circle Provided by Martad Education and Skills Development
						Ltd aggregated on the website{" "}
						<Link href="/" className="text-blue-600 underline">
							https://digitallearningcircle.com
						</Link>
						, its Subsidiary Websites, any of its Subdomains and Mobile
						Applications (the “Website(s)”), the users account(s) via the
						Website(s) (the “Account(s)”) and the Services operated via the
						Website(s) (the “Services”).
					</p>
					<p className="mb-4">
						The Website(s) is/are operated by Martad Education & Skills
						Development Ltd (“Martad” or “we” or “us”), a company duly organized
						under the laws of Nigeria, with business registration RC 1465296.
					</p>
					<p className="mb-4">
						By using any MinifiedContent of the Website and/or by registering
						the Account, you agree to be bound by these Terms & Conditions
						together with our{" "}
						<Link href="/policy" className="text-blue-600 underline">
							Privacy Policy
						</Link>
						, any other rules in the Help Pages, and any terms and conditions
						and/or rules regarding promotions or bonuses.
					</p>
				</MinifiedContent>

				<MinifiedContent title="II. Access and Use of the Website(s) and the Services">
					<p className="mb-4">
						Martad does not warrant the constant availability and functionality
						of the Website(s) or any Services. We reserve the right to withdraw,
						suspend, or amend any aspect or feature without notice.
					</p>
					<p className="mb-4">
						You shall use the Website(s) and Services for your personal and
						non-commercial use only. You may not copy, reproduce, or frame the
						Website(s) in any form without our written permission.
					</p>
					<p className="mb-4">
						We may link to third-party websites for informational purposes only.
						Martad does not endorse or accept responsibility for third-party
						content or data handling.
					</p>
					<p className="mb-4">
						Your use of any data or content accessed through the Website(s) is
						restricted to personal use. Automated data scraping or reuse of
						content is prohibited.
					</p>
					<p className="mb-4">
						Use of the Services outside Nigeria must comply with applicable
						foreign laws and exchange control regulations. Martad makes no
						guarantees for remittance to foreign jurisdictions.
					</p>
					<p className="mb-4">
						You must not misuse the Website(s) by introducing malware or
						attempting unauthorized access. Downloads and software usage are at
						your own risk.
					</p>
					<p className="mb-4">
						The Website(s) and Services may not be legal in all jurisdictions.
						It is your responsibility to verify legality in your region.
					</p>
				</MinifiedContent>
				<MinifiedContent title="III. AMENDMENTS TO THE TERMS OF USE">
					<p className="mb-4">
						Martad may make changes to any part of the Terms of Use at any time
						for several reasons, including, without limitation, to comply with
						the applicable laws and regulations. The new version of the Terms of
						Use will be published on the Websites including the effective date
						of publication.
					</p>
					<p className="mb-4">
						We advise you to review the Terms of Use regularly. It is your
						responsibility to ensure that you understand the Terms of Use. If
						any of the terms and/or any of the changes to the Terms of Use are
						unacceptable to you, you should stop using the Websites and the
						Account. Your continued use of the Websites, the Account and/or any
						of the Services will be deemed as your acceptance of any changes
						that we may make.
					</p>
				</MinifiedContent>

				<MinifiedContent title="IV. ACCOUNT REGISTRATION AND MANAGEMENT">
					<p className="mb-4">
						A User must register an Account to utilise any of the Services.
						Martad reserves the right to refuse to register your Account with or
						without cause.
					</p>
					<p className="mb-4">
						(a) To register an Account, you represent, warrant and agree that
						you are: (i) 18 years old; (ii) you will provide accurate
						registration information when registering the Account, including,
						without limitation, Full Name, e-mail address and Telephone Number
						and notify us of any changes of such details; (iii) you are opening
						the Account for your personal use; (iv) you are legally capable of
						entering into binding contracts, including these Terms of Use and
						each game.
					</p>
					<p className="mb-4">
						(b) Martad reserves the right to verify the User’s age at any time.
						If you are found to have breached Clause 2 (a) or any of the
						representations and warranties therein are deemed false, we may (i)
						terminate the Account and (iv) refer the matter to the police, and
						notify the family and/or appropriate regulatory authority. (iii)
						Cancel your Prize.
					</p>
					<p className="mb-4">
						By registering an Account and/or using any Services or the Website,
						you hereby agree that we shall be entitled to conduct all such
						identification, credit and other verification checks from time to
						time that we may require or deem necessary and/or are required by
						applicable laws and regulations, and/or by the relevant regulatory
						authority.
					</p>

					<p className="mb-4">
						You agree to provide all such information as we require in
						connection with such verification checks. Martad shall be entitled
						to suspend or restrict your Account and/or any of the Services or
						part thereof in any manner that we may deem to be appropriate until
						the relevant checks are completed to our satisfaction.
					</p>

					<p className="mb-4">
						Without limiting the foregoing, in the event we cannot successfully
						verify any of the elements of the Account registered details or if
						any information provided is deemed to be false or inaccurate, Martad
						reserves the right to void any of the Plays, Suspend or Terminate
						your Account and forfeit your Prizes.
					</p>

					<p className="mb-4">
						Martad reserves the right to engage a third party to perform
						verification checks. Any information you provide to Martad for
						Account registration or send to Martad as part of the Account
						Management or verification procedures shall be used by the Privacy
						Policy.
					</p>

					<p className="mb-4">
						It is your responsibility to ensure that all details you provide us
						in satisfaction with our verification checks are kept up to date.
					</p>

					<p className="mb-4">
						You cannot buy, sell or transfer the Account to other User(s). You
						shall not transfer or sell your Account and/or acquire or accept a
						transfer of another registered Account with Martad from another
						person.
					</p>

					<p className="mb-4">
						Martad does not allow any of its employees, anyone else in any way
						connected to such employee or anyone otherwise connected to a
						third-party service provider or an agent (to be determined at
						Martad’s absolute discretion) to Play on any of our Games. All such
						Plays shall be void.
					</p>

					<p className="mb-4">
						Every User may open only one Account per any of our Games. If we
						have reasonable grounds to believe that you have more than one
						Account Per Game (including any Accounts you opened with
						misspellings or different variations of your name or email) and we
						reasonably believe that multiple Accounts have been opened or used
						in breach of the Terms of Use, we may close your Accounts, or allow
						you to retain the first Account you opened with us.
					</p>

					<p className="mb-4">
						We will be entitled to declare all Plays placed under any duplicate
						Account(s) as void and withhold any winning.
					</p>

					<p className="mb-4">
						When opening an Account, you may be allocated or may be requested to
						choose the username and will need to create a password. You must
						keep all Account information secure at all times, including the
						Account username and password. You are responsible for the security
						of your Account and all transactions performed under your Account.
					</p>

					<p className="mb-4">
						If you lose or forget your username and/or password, you should
						change your password without delay via your Account, the Website(s)
						or by contacting us. If you believe or have reasons to suspect that
						a third party is aware of or may have access to any Account
						information, including your email or mobile number, contact us
						immediately. Martad shall not be liable for any loss that you may
						incur as a result of misuse of username(s) and/or password (s) or
						from any unauthorised use of your Account, whether fraudulent or
						otherwise.
					</p>

					<p className="mb-4">
						The User can request termination of their Account whenever they wish
						by sending a request to the Customer Service in writing, via email
						to
						<Link href="/contact">
							{" "}
							https://digitallearningcircle.com/contact
						</Link>{" "}
						using Shortcode, Short Code Keywords or Deactivating From their
						Account.
					</p>

					<p className="mb-4">
						An Account terminated by you may be reopened depending on the
						circumstances and the reasons for Account termination, on your
						request and at Martad’s discretion, subject to successful identity
						verification checks. In such event, the use of the Website(s) and/or
						the Services shall be subject to the Terms of Use that are in force
						at the date of Account reactivation. You will not be able to
						register a new account with Martad once your Account has been
						closed.
					</p>

					<p className="mb-4">
						Without limiting any rights of Martad hereunder or in law, if Martad
						reasonably believes, at its sole discretion, that you have breached
						these Terms of Use, including any of our games rules and terms and
						conditions applicable to any specific functionality, bonus or
						promotion, or actual or suspected prohibited behaviour leading to
						collusion or fraud or activity aimed at defrauding Martad, or there
						has been unusual activity on the Account, or for any legal reasons,
						Martad may: (i) suspend your Account for up to 90 days; and/or (ii)
						prevent you from accessing your Account; and/or (iv) terminate your
						Account.
					</p>

					<p className="mb-4">
						Martad may require you to provide any additional information that is
						necessary to conduct an investigation and/or verify your compliance
						with these Terms of Use. Martad may notify you of the Account
						suspension using the email address registered under the Account or
						via online pop-up notice when logging into your Account, provided
						such notification will at no time be a pre-condition for any
						suspension or termination of the Account, as the case may be.
					</p>

					<p className="mb-4">
						Martad will address the issue that has given rise to the Account
						suspension as soon as may be reasonably practicable, including
						requesting verification information from you. As a result of the
						review or investigation, the Account and/or any specific suspended
						functionality will be either re-activated or terminated.
					</p>

					<p className="mb-4">
						If any potentially suspicious activity is performed under your
						Account, you may be requested to provide us with additional
						documentation confirming your identity or source of funds or
						address. Martad may suspend or close your Account immediately as a
						result of the activity that cannot be verified by supporting
						evidence.
					</p>

					<p className="mb-4">
						If Martad terminates the Account under the foregoing or due to your
						breach of any of the Terms of Use, the winnings may be forfeited. On
						termination of the Account, your rights to use the Services shall
						immediately terminate. It is your sole responsibility to uninstall
						or remove any software used in relation to the use of the Website(s)
						and/or the Services, as you may deem appropriate.
					</p>
				</MinifiedContent>

				<MinifiedContent title="Account Suspension and Termination">
					<p className="mb-4">
						Without limiting or restricting Martad’s rights and/or remedies
						available to it hereunder or in law, we may exclude the User from
						the Services, suspend and/or terminate the Account and/or cancel any
						Plays under the Account, including the winnings, at our absolute
						discretion and without having to disclose the reason.
					</p>
					<p className="mb-4">
						Martad shall not be liable to you for any termination of the Account
						for whichever reason. Martad shall report any of your Account
						details to relevant bodies, associations, authorities, police or any
						other investigatory and/or state authorities, or any other third
						party as prescribed or permitted by law or any applicable rules.
					</p>
				</MinifiedContent>
				<MinifiedContent title="VII. BONUSES / PROMOTIONS & REWARDS">
					<p className="mb-4">
						We may make available the bonus offers, promotions or reward
						programs on the Websites, via your email registered under your
						Account or social media. You can find more information under your
						Account and our help pages.
					</p>
					<p className="mb-4">
						Your eligibility for the offer or promotion and/or participation in
						the rewards program will be subject to the terms and conditions for
						the respective bonus offer, promotion or rewards program available
						on the Websites and/or your Account.
					</p>
					<p className="mb-4">
						Martad reserves the right to deny or terminate any bonuses,
						promotions and/or special offerings, as well as to modify, suspend
						or discontinue their validity at its sole discretion and without
						informing the User.
					</p>
				</MinifiedContent>

				<MinifiedContent title="VIII. RESPONSIBLE GAMING">
					<p className="mb-4">
						We believe in Responsible Gaming and take our responsibility in this
						matter seriously. Gaming should be an exciting pastime, and we urge
						our Users to have fun, but not games beyond their means.
					</p>
					<p className="mb-4">
						The User may request our Customer Service temporary or permanent
						self-exclusion from part or all of the Services as well as the
						termination of the Account at any time. We will use all our
						reasonable endeavours to ensure compliance with self-exclusion;
						however, you accept that we are not liable if you manage to bypass
						our security measures in circumstances that are beyond our
						reasonable control.
					</p>
				</MinifiedContent>

				<MinifiedContent title="IX. ERRORS AND OMISSIONS">
					<p className="mb-4">
						Martad makes an effort to ensure there are no errors made in its
						systems utilised to make the Website and/or the Services available
						for use. However, human and/or system errors may occasionally result
						in errors. Martad reserves the right to correct any error, whenever
						identified.
					</p>
					<p className="mb-4">
						Neither we (including our officers, employees or agents) nor our
						partners or suppliers, shall be liable for any loss, including loss
						of winnings, that results from any Error or any mistake made by you
						in utilising the Services.
					</p>
					<p className="mb-4">
						You shall inform us as soon as reasonably practicable should you
						become aware of any Error and stop immediately any further activity
						about the Service(s) the Error applies to.
					</p>
					<p className="mb-4">
						If you want to report an error or have any questions please contact
						the{" "}
						<Link href="/contact" className="text-blue-600 underline">
							Customer Support Team
						</Link>
						. Please note that any calls to our Customer Support Team may be
						monitored or recorded for training and quality management purposes
						and to assist us in the quick and effective resolution of queries.
					</p>
				</MinifiedContent>
			</div>
		</main>
	)
}
