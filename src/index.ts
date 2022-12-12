import DBConnection from './lib/db/connection';
//import vote from './voting';

new DBConnection();

export const handler = async (event: any, context: any): Promise<any> => {
  console.log('poll api handler', event);

  //const payload = JSON.parse(Buffer.from(event.records[0].data, 'base64').toString('utf8'));  
  const payload = {
    questionId: '2f59a71a-74e3-4de7-b574-05e508f87029',
    optionId: '13bca403-3be6-4f4e-9593-6429a8de1f82'
  };

  if( payload?.questionId && payload?.optionId ) {

    //await vote.storeVote(payload)
  }

  return payload;
}

handler({},{});