const mongoose = require('mongoose');

const userStockModel = require('../models/userStockModel');
const stockModel = require('../models/stockModel');

const fetchStocks = async (socket, data) => {
  try {
    const email = data.email || '';

    const userStocks = await userStockModel
      .findOne({ email }, { _id: false })
      .populate({ path: 'stocks', select: '-_id' });

    const stocks = (userStocks && userStocks.stocks) || [];

    socket.emit('stocks-fetched', { stocks, socketId: socket.id });
  } catch (error) {
    console.log(`Error: stock-service->fetchStocks ${error.code} ${error.message}`);
  }
};

const updateStocks = async (interval) => {
  try {
    const stocks = await stockModel.find({}, '_id price');

    setInterval(async () => {
      await stockModel.bulkWrite(
        stocks.map((stock) => {
          const changeIs = Math.random() < 0.5 ? -1 : 1;

          return {
            updateOne: {
              filter: { _id: stock._id },
              update: {
                $set: {
                  price: (Math.random() * 1000).toFixed(2),
                  change: (Math.random() * 100 * changeIs).toFixed(2),
                  percentChange: (Math.random() * 30 * changeIs).toFixed(2),
                  lastTradingTime: new Date().toUTCString(),
                },
              },
            },
          };
        })
      );
    }, interval);
  } catch (error) {
    console.log(`Error: stock-service->updateStocks ${error.code} ${error.message}`);
  }
};

/* CreateStocks: Just for mocking stocks, might not be an ideal implementation */
const createStocks = () => {
  try {
    const lastTradingTime = new Date();

    const stockData = [
      {
        LongName: 'RELIANCE INDUSTRIES LTD.',
        LastTrdTime: lastTradingTime,
        PercentChange: 4.15,
        Symbol: '500325',
        ScripName: 'RELIANCE',
        Price: 2146.2,
        Change: 85.55,
        Volume: 2889272,
      },
      {
        LongName: 'INDUSIND BANK LTD.',
        LastTrdTime: lastTradingTime,
        PercentChange: 1.61,
        Symbol: '532187',
        ScripName: 'INDUSINDBK',
        Price: 522.2,
        Change: 8.25,
        Volume: 2149598,
      },
      {
        LongName: 'Bajaj Finance Limited',
        LastTrdTime: lastTradingTime,
        PercentChange: -1.42,
        Symbol: '500034',
        ScripName: 'BAJFINANCE',
        Price: 3251.35,
        Change: -46.9,
        Volume: 342526,
      },
      {
        LongName: 'ICICI BANK LTD.',
        LastTrdTime: lastTradingTime,
        PercentChange: -2.66,
        Symbol: '532174',
        ScripName: 'ICICIBANK',
        Price: 381.85,
        Change: -10.45,
        Volume: 2437511,
      },
      {
        LongName: 'INFOSYS LTD.',
        LastTrdTime: lastTradingTime,
        PercentChange: 1.51,
        Symbol: '500209',
        ScripName: 'INFY',
        Price: 922.6,
        Change: 13.75,
        Volume: 845525,
      },
      {
        LongName: 'HDFC Bank Ltd',
        LastTrdTime: lastTradingTime,
        PercentChange: -1.05,
        Symbol: '500180',
        ScripName: 'HDFCBANK',
        Price: 1118.8,
        Change: -11.9,
        Volume: 687842,
      },
      {
        LongName: 'STATE BANK OF INDIA',
        LastTrdTime: lastTradingTime,
        PercentChange: -3.23,
        Symbol: '500112',
        ScripName: 'SBIN',
        Price: 191.9,
        Change: -6.4,
        Volume: 3518718,
      },
      {
        LongName: 'SUN PHARMACEUTICAL INDUSTRIES LTD.',
        LastTrdTime: lastTradingTime,
        PercentChange: 1.95,
        Symbol: '524715',
        ScripName: 'SUNPHARMA*',
        Price: 485.4,
        Change: 9.3,
        Volume: 942558,
      },
      {
        LongName: 'AXIS BANK LTD.',
        LastTrdTime: lastTradingTime,
        PercentChange: -3.32,
        Symbol: '532215',
        ScripName: 'AXISBANK',
        Price: 445.55,
        Change: -15.3,
        Volume: 1029792,
      },
      {
        LongName: 'HINDUSTAN UNILEVER LTD.',
        LastTrdTime: lastTradingTime,
        PercentChange: -0.14,
        Symbol: '500696',
        ScripName: 'HINDUNILVR',
        Price: 2209.75,
        Change: -3.2,
        Volume: 162662,
      },
      {
        LongName: 'KOTAK MAHINDRA BANK LTD.',
        LastTrdTime: lastTradingTime,
        PercentChange: -1.77,
        Symbol: '500247',
        ScripName: 'KOTAKBANK',
        Price: 1349.9,
        Change: -24.3,
        Volume: 216515,
      },
      {
        LongName: 'TECH MAHINDRA LTD.',
        LastTrdTime: lastTradingTime,
        PercentChange: 3.25,
        Symbol: '532755',
        ScripName: 'TECHM',
        Price: 652.75,
        Change: 20.55,
        Volume: 365520,
      },
      {
        LongName: 'LARSEN & TOUBRO LTD.',
        LastTrdTime: lastTradingTime,
        PercentChange: -1.29,
        Symbol: '500510',
        ScripName: 'LT',
        Price: 904.55,
        Change: -11.8,
        Volume: 255758,
      },
      {
        LongName: 'TATA CONSULTANCY SERVICES LTD.',
        LastTrdTime: lastTradingTime,
        PercentChange: -0.63,
        Symbol: '532540',
        ScripName: 'TCS',
        Price: 2157.05,
        Change: -13.7,
        Volume: 106972,
      },
      {
        LongName: 'BAJAJ FINSERV LTD.',
        LastTrdTime: lastTradingTime,
        PercentChange: -1.72,
        Symbol: '532978',
        ScripName: 'BAJAJFINSV',
        Price: 6269.65,
        Change: -109.55,
        Volume: 34236,
      },
      {
        LongName: 'TATA STEEL LTD.',
        LastTrdTime: lastTradingTime,
        PercentChange: -1.69,
        Symbol: '500470',
        ScripName: 'TATASTEEL',
        Price: 346.05,
        Change: -5.95,
        Volume: 577202,
      },
      {
        LongName: 'ITC LTD.',
        LastTrdTime: lastTradingTime,
        PercentChange: -0.47,
        Symbol: '500875',
        ScripName: 'ITC',
        Price: 199.7,
        Change: -0.95,
        Volume: 936745,
      },
      {
        LongName: 'MARUTI SUZUKI INDIA LTD.',
        LastTrdTime: lastTradingTime,
        PercentChange: -1.04,
        Symbol: '532500',
        ScripName: 'MARUTI',
        Price: 6000.6,
        Change: -63.15,
        Volume: 22525,
      },
      {
        LongName: 'Titan Company Limited',
        LastTrdTime: lastTradingTime,
        PercentChange: -1.17,
        Symbol: '500114',
        ScripName: 'TITAN',
        Price: 1057.6,
        Change: -12.5,
        Volume: 125182,
      },
      {
        LongName: 'NESTLE INDIA LTD.',
        LastTrdTime: lastTradingTime,
        PercentChange: -0.17,
        Symbol: '500790',
        ScripName: 'NESTLEIND',
        Price: 17231.4,
        Change: -28.7,
        Volume: 4877,
      },
    ];

    stockData.map(async (stock) => {
      await new stockModel({
        _id: mongoose.Types.ObjectId(),
        longName: stock.LongName,
        symbol: stock.Symbol,
        scripName: stock.ScripName,
        price: stock.Price,
        change: stock.Change,
        percentChange: stock.PercentChange,
        volume: stock.Volume,
        lastTradingTime: stock.LastTrdTime,
      }).save();
    });

    console.log('Stocks created!!');
  } catch (error) {
    console.log(`Error: stock-service->createStocks ${error.code} ${error.message}`);
  }
};

module.exports = { fetchStocks, updateStocks, createStocks };
