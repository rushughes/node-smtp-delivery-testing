# node-smtp-delivery-testing
Testing out different mailtrap and ses delivery options to see if email is delivered quicker

cp .env.example .env
cp config.json.example config.json

fill them in

The application sends 6 emails in total. 2 emails each via 3 transports, the transports are:

1) mailtrap smtp
2) Amazon SES smtp
3) Amazon SES API

Each transport will have 2 emails sent via it:

1) one to your mailtrap email configured in .env as MAILTRAP_EMAIL
2) one to another (e.g. personal gmail) configured in .env as OTHER_EMAIL

Observations:

From my laptop at home,

OK: mailtrap SMTP to MAILTRAP_EMAIL arrives instantly in mailtrap as expected
OK: mailtrap SMTP to OTHER_EMAIL arrives instantly in mailtrap as expected
ERROR: Amazon SES SMTP to MAILTRAP_EMAIL does NOT arrive
ERROR: Amazon SES API to MAILTRAP_EMAIL does NOT arrive
OK: Amazon SES SMTP to OTHER_EMAIL arrives instantly in gmail as expected
OK: Amazon SES API to OTHER_EMAIL arrives instantly in gmail as expected
