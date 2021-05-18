exports.seed = function (knex) {
  return knex('cases')
    .del()
    .then(function () {
      return knex('cases').insert([
        {
          // Done
          case_id: '2ff54195-ce30-456c-be63-2a6c765bdce2',
          user_id: '00ulzdrizE2yzxToH5d6',
          case_url:
            'https://hrf-asylum-cases.s3.amazonaws.com/2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          case_number: 'A094-216-526',
          case_date: '1-24-2013',
          judge_id: 1,
          case_outcome: 'Denied',
          country_of_origin: 'Mexico',
          protected_grounds: 'Social Group',
          application_type: 'initial',
          case_origin_city: 'Baltimore',
          case_origin_state: 'MD',
          gender: 'Male',
          applicant_language: 'Spanish',
          indigenous_group: 'Not Applicable',
          type_of_violence: 'Not Applicable',
          appellate: false,
          filed_in_one_year: false,
          credible: true,
          status: 'approved',
        },
        {
          // Done
          case_id: '099f113a-3514-45be-a2c7-9257eded3fe7',
          user_id: '00ulzdrizE2yzxToH5d6',
          case_url:
            'https://hrf-asylum-cases.s3.amazonaws.com/2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          case_number: 'A079-531-484',
          case_date: '8-30-2012',
          judge_id: 2,
          case_outcome: 'Granted',
          country_of_origin: 'El Salvador',
          protected_grounds: 'Political Opinion',
          application_type: 'initial',
          case_origin_city: 'Los Angeles',
          case_origin_state: 'CA',
          gender: 'Female',
          applicant_language: 'English',
          indigenous_group: 'Not Applicable',
          type_of_violence: 'Not Applicable',
          appellate: false,
          filed_in_one_year: true,
          credible: false,
          status: 'approved',
        },
        {
          // Done
          case_id: 'cbd7658f-4c8b-4160-91b6-3bf5d1be6628',
          user_id: '00ulzcegtVucXsfdp5d6',
          case_url:
            'https://hrf-asylum-cases.s3.amazonaws.com/2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          case_number: 'A043-400-049',
          case_date: '12-18-2012',
          judge_id: 3,
          case_outcome: 'Denied',
          country_of_origin: 'Jamaica',
          protected_grounds: 'Social Group',
          application_type: 'initial',
          case_origin_city: 'New York',
          case_origin_state: 'NY',
          gender: 'Female',
          applicant_language: 'English',
          indigenous_group: 'Not Applicable',
          type_of_violence: 'Not Applicable',
          appellate: false,
          filed_in_one_year: false,
          credible: true,
          status: 'approved',
        },
        {
          // Done
          case_id: '90e156ca-8f0d-4ca6-b114-b168e4d1d79e',
          user_id: '00ulzcegtVucXsfdp5d6',
          case_url:
            'https://hrf-asylum-cases.s3.amazonaws.com/2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          case_number: 'A088-268-610',
          case_date: '12-14-2012',
          judge_id: 4,
          case_outcome: 'Denied',
          country_of_origin: 'Jamaica',
          protected_grounds: 'Social Group',
          application_type: 'initial',
          case_origin_city: 'Boston',
          case_origin_state: 'MA',
          gender: 'Female',
          applicant_language: 'English',
          indigenous_group: 'Not Applicable',
          type_of_violence: 'Not Applicable',
          appellate: false,
          filed_in_one_year: false,
          credible: false,
          status: 'approved',
        },
        {
          // Done
          case_id: 'e0343942-2053-4499-96e7-85b300eef4eb',
          user_id: '00ulzg60x94UujHsV5d6',
          case_url:
            'https://hrf-asylum-cases.s3.amazonaws.com/2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          case_number: 'A057-056-1193',
          case_date: '2-8-2013',
          judge_id: 5,
          case_outcome: 'Denied',
          country_of_origin: 'Mexico',
          protected_grounds: 'Nationality',
          application_type: 'initial',
          case_origin_city: 'Imperial',
          case_origin_state: 'CA',
          gender: 'Female',
          applicant_language: 'Spanish',
          indigenous_group: 'Not Applicable',
          type_of_violence: 'Not Applicable',
          appellate: false,
          filed_in_one_year: false,
          credible: false,
          status: 'approved',
        },
        {
          // Done
          case_id: 'f4574526-bb1f-4f20-ae24-75474ee15ee0',
          user_id: '00ulzg60x94UujHsV5d6',
          case_url:
            'https://hrf-asylum-cases.s3.amazonaws.com/2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          case_number: 'A071-996-819',
          case_date: '9-14-2012',
          judge_id: 3,
          case_outcome: 'Remanded',
          country_of_origin: 'Mexico',
          protected_grounds: 'Race',
          application_type: 'initial',
          case_origin_city: 'Chicago',
          case_origin_state: 'IL',
          gender: 'Female',
          applicant_language: 'Spanish',
          indigenous_group: 'Not Applicable',
          type_of_violence: 'Not Applicable',
          appellate: false,
          filed_in_one_year: true,
          credible: false,
          status: 'approved',
        },
        {
          // Done
          case_id: '2a27418f-3444-4f5b-9730-b01609f7b428',
          user_id: '00ulzenirO3Evj2U95d6',
          case_url:
            'https://hrf-asylum-cases.s3.amazonaws.com/2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          case_number: 'A093-138-113',
          case_date: '3-07-2013',
          judge_id: 5,
          case_outcome: 'Remanded',
          country_of_origin: 'Guatemala',
          protected_grounds: 'Social Group',
          application_type: 'initial',
          case_origin_city: 'Imperial',
          case_origin_state: 'CA',
          gender: 'Female',
          applicant_language: 'Spanish',
          indigenous_group: 'Not Applicable',
          type_of_violence: 'Not Applicable',
          appellate: false,
          filed_in_one_year: false,
          credible: true,
          status: 'approved',
        },
        {
          // Done
          case_id: '0da16c93-6fdd-4f0a-8ed6-4c686e675693',
          user_id: '00ulzenirO3Evj2U95d6',
          case_url:
            'https://hrf-asylum-cases.s3.amazonaws.com/2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          case_number: 'A027-392-198',
          case_date: '6-12-2012',
          judge_id: 4,
          case_outcome: 'Remanded',
          country_of_origin: 'Mexico',
          protected_grounds: 'Religion',
          application_type: 'initial',
          case_origin_city: 'Seattle',
          case_origin_state: 'WA',
          gender: 'Female',
          applicant_language: 'Spanish',
          indigenous_group: 'Not Applicable',
          type_of_violence: 'Not Applicable',
          appellate: false,
          filed_in_one_year: false,
          credible: false,
          status: 'approved',
        },
        {
          // Done
          case_id: '22726ebf-f968-4610-a3c8-0c5f921fcbf9',
          user_id: '00ulzdb18iCY1wMep5d6',
          case_url:
            'https://hrf-asylum-cases.s3.amazonaws.com/2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          case_number: 'A028-803-028',
          case_date: '4-3-2012',
          judge_id: 4,
          case_outcome: 'Denied',
          country_of_origin: 'El Salvador',
          protected_grounds: 'Political Opinion',
          application_type: 'initial',
          case_origin_city: 'San Francisco',
          case_origin_state: 'CA',
          gender: 'Female',
          applicant_language: 'English',
          indigenous_group: 'Not Applicable',
          type_of_violence: 'Not Applicable',
          appellate: false,
          filed_in_one_year: true,
          credible: false,
          status: 'approved',
        },
        {
          // Done
          case_id: '75a1fb1b-1ffe-45d6-b347-9ef67d4b9180',
          user_id: '00ulzdb18iCY1wMep5d6',
          case_url:
            'https://hrf-asylum-cases.s3.amazonaws.com/2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          case_number: 'A089-207-04',
          case_date: '1-31-2012',
          judge_id: 2,
          case_outcome: 'Sustained',
          country_of_origin: 'Honduras',
          protected_grounds: 'Nationality',
          application_type: 'initial',
          case_origin_city: 'Imperial',
          case_origin_state: 'CA',
          gender: 'Female',
          applicant_language: 'Spanish',
          indigenous_group: 'Not Applicable',
          type_of_violence: 'Not Applicable',
          appellate: false,
          filed_in_one_year: false,
          credible: false,
          status: 'approved',
        },
        {
          // Done
          case_id: '04fbe436-da2c-4e20-9cfb-2221ad8e1f29',
          user_id: '00ulzfj6nX79gu0Nh5d6',
          case_url:
            'https://hrf-asylum-cases.s3.amazonaws.com/2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          case_number: 'A044-857-956',
          case_date: '12-15-2011',
          judge_id: 2,
          case_outcome: 'Terminated',
          country_of_origin: 'Mexico',
          protected_grounds: 'Political Opinion',
          application_type: 'initial',
          case_origin_city: 'San Antonio',
          case_origin_state: 'TX',
          gender: 'Female',
          applicant_language: 'Spanish',
          indigenous_group: 'Not Applicable',
          type_of_violence: 'Not Applicable',
          appellate: false,
          filed_in_one_year: false,
          credible: false,
          status: 'approved',
        },
        {
          // Done
          case_id: '78efa342-4f5a-4e04-bd96-13dadc17bff5',
          user_id: '00ulzfj6nX79gu0Nh5d6',
          case_url:
            'https://hrf-asylum-cases.s3.amazonaws.com/2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          case_number: 'A095-094-694 ',
          case_date: '11-16-2012',
          judge_id: 6,
          case_outcome: 'Denied',
          country_of_origin: 'Jamaica',
          protected_grounds: 'Social Group',
          case_origin_city: 'Orlando',
          case_origin_state: 'FL',
          gender: 'Female',
          applicant_language: 'English',
          indigenous_group: 'Not Applicable',
          type_of_violence: 'Not Applicable',
          application_type: 'initial',
          appellate: false,
          filed_in_one_year: false,
          credible: false,
          status: 'approved',
        },
        {
          // Done
          case_id: '10e9b2b1-4eb3-4d7d-b4d7-4b60fa5d42b5',
          user_id: '00ulzdrizE2yzxToH5d6',
          case_url:
            'https://hrf-asylum-cases.s3.amazonaws.com/2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          case_number: 'A076-593-027',
          case_date: '12-14-2012',
          judge_id: 7,
          case_outcome: 'Remanded',
          country_of_origin: 'Mexico',
          protected_grounds: 'Race',
          application_type: 'initial',
          case_origin_city: 'Arlington',
          case_origin_state: 'VA',
          gender: 'Female',
          applicant_language: 'Spanish',
          indigenous_group: 'Not Applicable',
          type_of_violence: 'Not Applicable',
          appellate: true,
          filed_in_one_year: false,
          credible: false,
          status: 'approved',
        },
        {
          // Done
          case_id: '90226140-67e6-482c-b21a-b8ee6351879d',
          user_id: '00ulzdrizE2yzxToH5d6',
          case_url:
            'https://hrf-asylum-cases.s3.amazonaws.com/2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          case_number: 'A027-824-163',
          case_date: '5-30-2013',
          judge_id: 8,
          case_outcome: 'Remanded',
          country_of_origin: 'Jamaica',
          protected_grounds: 'Social Group',
          application_type: 'initial',
          case_origin_city: 'New Orleans',
          case_origin_state: 'LA',
          gender: 'Female',
          applicant_language: 'English',
          indigenous_group: 'Not Applicable',
          type_of_violence: 'Not Applicable',
          appellate: true,
          filed_in_one_year: false,
          credible: true,
          status: 'approved',
        },
        {
          case_id: 'be060eeb-f1f3-48c0-b6db-3f8fed6135b9',
          user_id: '00ulzcegtVucXsfdp5d6',
          case_url:
            'https://hrf-asylum-cases.s3.amazonaws.com/70a5a7f0-a6eb-419b-8cfe-dec773762f3a.pdf',
          case_number: 'A074-787-749',
          case_date: '2-28-2013',
          judge_id: 3,
          case_outcome: 'Remanded',
          country_of_origin: 'Mexico',
          protected_grounds: 'Religion',
          application_type: 'initial',
          case_origin_city: 'Phoenix',
          case_origin_state: 'AZ',
          gender: 'Female',
          applicant_language: 'English',
          indigenous_group: 'Not Applicable',
          type_of_violence: 'Not Applicable',
          appellate: true,
          filed_in_one_year: true,
          credible: false,
          status: 'pending', // For testing of the case approval page
        },
      ]);
    });
};
