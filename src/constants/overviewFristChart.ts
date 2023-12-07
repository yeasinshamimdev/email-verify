export const data = [
    {
      totalPercantage: 40,
      label: 'deliverable',
      emails: 2415,
      subTitle:"Email address is associated with a valid account"
    },
    {
      totalPercantage: 7.4,
      label: 'undeliverable',
      emails: 415,
      subTitle:"Email address is not associated with a valid account or should not be emailed"
    },
    {
      totalPercantage: 48.5,
      label: 'risky',
      emails: 2712,
      subTitle:"Email address may appear deliverable, but should be used with caution due to low quality or deliverability. May include Accept-All, Disposable, and Role addresses."
    },
    {
      totalPercantage: 0.9,
      label: 'unknown',
      emails: 49,
      subTitle:"Email address is associated with a mail server that is not responding or returning an unknown response. Usually this is temporary, but at this time we cannot determine the deliverability of this email address."
    },
    {
      totalPercantage: 0.0,
      label: 'duplicate',
      emails: 0.0,
      subTitle:"Email address is on this list multiple times."
    },
  ];