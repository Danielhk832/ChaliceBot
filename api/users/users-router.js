const router = require("express").Router();
const { Client } = require("espn-fantasy-football-api/node");

const myClient = new Client({ leagueId: 352458 });

myClient.setCookies({
  espnS2:
    "AECIARW4tm8roPGMrTZJwAxyIBPmgRMrDM9gBivBITZ1pAbtHDMF42fT71j5JzB3wXf4mTXMNRbouJVXJVcNd8UkGWe9nnz6Fmw8v4unhKHsfiIGzaqm28L%2FYAnq41p21uwC2XntHx8EsmzMHmLrod2NJF1upEuMUlR1oTnrb68h6uAe%2Fm%2Biu4oFegjLn12lenYrIrTmXlRZmykXsAZ3f2fCkRfaROC9i2yGrP0gyH667mbJBA9clXilBtGknQfuMZkiThKr35ZuxOQRNTGx4xGEuKqctel3w4cNh56KDa4nuw%3D%3D",
  SWID: "{F8ED48B8-F267-4475-AD48-B8F267A47531}",
});

router.get("/", async (req, res, next) => {
  try {
    res.json(await myClient.getLeagueInfo({ seasonId: 2021 }));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
