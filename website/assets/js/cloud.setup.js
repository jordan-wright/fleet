/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */

Cloud.setup({

  /* eslint-disable */
  methods: {"redirectToStripeBillingPortal":{"verb":"GET","url":"/customers/update-subscription","args":[]},"downloadSitemap":{"verb":"GET","url":"/sitemap.xml","args":[]},"downloadRssFeed":{"verb":"GET","url":"/rss/:categoryName","args":["categoryName"]},"receiveUsageAnalytics":{"verb":"POST","url":"/api/v1/webhooks/receive-usage-analytics","args":["anonymousIdentifier","fleetVersion","licenseTier","numHostsEnrolled","numUsers","numTeams","numPolicies","numLabels","softwareInventoryEnabled","vulnDetectionEnabled","systemUsersEnabled","hostsStatusWebHookEnabled","numWeeklyActiveUsers","numWeeklyPolicyViolationDaysActual","numWeeklyPolicyViolationDaysPossible","hostsEnrolledByOperatingSystem","hostsEnrolledByOrbitVersion","hostsEnrolledByOsqueryVersion","storedErrors","numHostsNotResponding","organization","mdmMacOsEnabled","mdmWindowsEnabled","liveQueryDisabled","hostExpiryEnabled","numSoftwareVersions","numHostSoftwares","numSoftwareTitles","numHostSoftwareInstalledPaths","numSoftwareCPEs","numSoftwareCVEs","aiFeaturesDisabled","maintenanceWindowsEnabled","maintenanceWindowsConfigured","numHostsFleetDesktopEnabled","numQueries"]},"receiveFromGithub":{"verb":"GET","url":"/api/v1/webhooks/github","args":["botSignature","action","sender","repository","changes","issue","comment","pull_request","label","release"]},"receiveFromStripe":{"verb":"POST","url":"/api/v1/webhooks/receive-from-stripe","args":["id","type","data","webhookSecret"]},"getEstDeviceCertificate":{"verb":"POST","url":"/api/v1/get-est-device-certificate","args":["csrData","authToken"]},"deliverContactFormMessage":{"verb":"POST","url":"/api/v1/deliver-contact-form-message","args":["emailAddress","firstName","lastName","message"]},"sendPasswordRecoveryEmail":{"verb":"POST","url":"/api/v1/entrance/send-password-recovery-email","args":["emailAddress"]},"signup":{"verb":"POST","url":"/api/v1/customers/signup","args":["emailAddress","password","organization","firstName","lastName","signupReason"]},"updateProfile":{"verb":"POST","url":"/api/v1/account/update-profile","args":["firstName","lastName","organization","emailAddress"]},"updatePassword":{"verb":"POST","url":"/api/v1/account/update-password","args":["oldPassword","newPassword"]},"updateBillingCard":{"verb":"POST","url":"/api/v1/account/update-billing-card","args":["stripeToken","billingCardLast4","billingCardBrand","billingCardExpMonth","billingCardExpYear"]},"login":{"verb":"POST","url":"/api/v1/customers/login","args":["emailAddress","password","rememberMe"]},"logout":{"verb":"GET","url":"/api/v1/account/logout","args":[]},"createQuote":{"verb":"POST","url":"/api/v1/customers/create-quote","args":["numberOfHosts"]},"saveBillingInfoAndSubscribe":{"verb":"POST","url":"/api/v1/customers/save-billing-info-and-subscribe","args":["quoteId","organization","firstName","lastName","paymentSource"]},"updatePasswordAndLogin":{"verb":"POST","url":"/api/v1/entrance/update-password-and-login","args":["password","token"]},"deliverDemoSignup":{"verb":"POST","url":"/api/v1/deliver-demo-signup","args":["emailAddress"]},"createOrUpdateOneNewsletterSubscription":{"verb":"POST","url":"/api/v1/create-or-update-one-newsletter-subscription","args":["emailAddress"]},"unsubscribeFromAllNewsletters":{"verb":"GET","url":"/api/v1/unsubscribe-from-all-newsletters","args":["emailAddress"]},"buildLicenseKey":{"verb":"POST","url":"/api/v1/admin/build-license-key","args":["numberOfHosts","organization","expiresAt","partnerName"]},"createVantaAuthorizationRequest":{"verb":"POST","url":"/api/v1/create-vanta-authorization-request","args":["emailAddress","fleetInstanceUrl","fleetApiKey","redirectToExternalPageAfterAuthorization","sharedSecret"]},"redirectVantaAuthorizationRequest":{"verb":"GET","url":"/redirect-vanta-authorization-request","args":["vantaSourceId","state","vantaAuthorizationRequestURL","redirectAfterSetup"]},"deliverMdmBetaSignup":{"verb":"POST","url":"/api/v1/deliver-mdm-beta-signup","args":["emailAddress","fullName","jobTitle","numberOfHosts"]},"getHumanInterpretationFromOsquerySql":{"verb":"POST","url":"/api/v1/get-human-interpretation-from-osquery-sql","args":["sql"]},"deliverAppleCsr":{"verb":"POST","url":"/api/v1/deliver-apple-csr","args":["unsignedCsrData","deliveryMethod"]},"deliverMdmDemoEmail":{"verb":"POST","url":"/api/v1/deliver-mdm-demo-email","args":["emailAddress"]},"provisionSandboxInstanceAndDeliverEmail":{"verb":"POST","url":"/api/v1/admin/provision-sandbox-instance-and-deliver-email","args":["userId"]},"deliverTalkToUsFormSubmission":{"verb":"POST","url":"/api/v1/deliver-talk-to-us-form-submission","args":["emailAddress","firstName","lastName","organization","numberOfHosts","primaryBuyingSituation"]},"saveQuestionnaireProgress":{"verb":"POST","url":"/api/v1/save-questionnaire-progress","args":["currentStep","formData"]},"updateStartCtaVisibility":{"verb":"POST","url":"/api/v1/account/update-start-cta-visibility","args":[]},"deliverDealRegistrationSubmission":{"verb":"POST","url":"/api/v1/deliver-deal-registration-submission","args":["submittersFirstName","submittersLastName","submittersEmailAddress","submittersOrganization","customersFirstName","customersLastName","customersEmailAddress","linkedinUrl","customersOrganization","customersCurrentMdm","otherMdmEvaluated","preferredHosting","expectedDealSize","expectedCloseDate","notes"]},"unsubscribeFromMarketingEmails":{"verb":"GET","url":"/api/v1/unsubscribe-from-marketing-emails","args":["emailAddress"]},"getStripeCheckoutSessionUrl":{"verb":"POST","url":"/api/v1/customers/get-stripe-checkout-session-url","args":["quoteId"]},"getLlmGeneratedSql":{"verb":"POST","url":"/api/v1/query-generator/get-llm-generated-sql","args":["naturalLanguageQuestion"]}}
  /* eslint-enable */

});
