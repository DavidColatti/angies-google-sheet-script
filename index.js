function al(id) {
  var url = "https://member.angieslist.com/gateway/service-provider-profile/v4/service_provider/" + id + "?zipCode=11207&categoryId=77" 
      
	var res = UrlFetchApp.fetch(url, {
		headers: {
			accept: 'application/json',
			'accept-language': 'en-US,en;q=0.9',
			pragma: 'no-cache',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-origin',
			'x-angi-anonymousid': '215a9db8-fe8b-415a-7535-597a2fc778b8',
			'x-angi-applicationversion': '1.1.0',
			'x-angi-callerid': '79351237',
			'x-angi-callertype': 'Member',
			'x-angi-entrypointid': '34103542',
			'x-angi-marketingcloudvisitorid': '83266801249885083401588063845666855220',
			'x-angi-proxyversion': '1',
			'x-angi-requestid': '95f2e862-948f-11ea-8207-2bd2c3858726',
			'x-angi-sourceapplication': 'member-app',
			'x-angi-taxonomyname': 'Ad Platform'
		},
		referrer: 'https://member.angieslist.com/member/store/25082296/deals?categoryId=77',
		referrerPolicy: 'no-referrer-when-downgrade',
		body: null,
		method: 'GET',
		mode: 'cors',
		credentials: 'include'
	});

	var content = res.getContentText();

	var json = JSON.parse(content);
	var phoneNumber = json['primaryContactInfo']['primaryPhoneNumber']['original'];
	var companyName = json['name'];
	var zip = json['primaryAddress']['postalCode'];

	return companyName + ',' + phoneNumber + ',' + zip;
}
