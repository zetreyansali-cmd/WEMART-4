var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry-view",
      "name": "ENTRY VIEW",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.8887213346523346,
        "pitch": -0.0009177150673735923,
        "fov": 1.4862094668052352
      },
      "linkHotspots": [
        {
          "yaw": 1.5485680946678784,
          "pitch": -0.019943366957132724,
          "rotation": 5.497787143782138,
          "target": "1-cafe"
        },
        {
          "yaw": -2.036783664469601,
          "pitch": 0.012432852215511048,
          "rotation": 4.71238898038469,
          "target": "2-outside-table"
        },
        {
          "yaw": 2.5680833884369303,
          "pitch": -0.026744993035023867,
          "rotation": 5.497787143782138,
          "target": "3-beverages"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cafe",
      "name": "CAFE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5785181295040829,
        "pitch": 0.006019156171671369,
        "fov": 1.5567488231102231
      },
      "linkHotspots": [
        {
          "yaw": -0.036341945793505914,
          "pitch": -0.007007909854259253,
          "rotation": 4.71238898038469,
          "target": "0-entry-view"
        },
        {
          "yaw": -3.108076643841688,
          "pitch": -0.03216616913661774,
          "rotation": 1.5707963267948966,
          "target": "3-beverages"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-outside-table",
      "name": "OUTSIDE TABLE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.830226602315558,
        "pitch": -0.010060545852212499,
        "fov": 1.5567488231102231
      },
      "linkHotspots": [
        {
          "yaw": 1.727627181406083,
          "pitch": -0.02367710525375699,
          "rotation": 1.5707963267948966,
          "target": "0-entry-view"
        },
        {
          "yaw": 1.034357246806115,
          "pitch": -0.07952057973020388,
          "rotation": 4.71238898038469,
          "target": "4-exterior"
        },
        {
          "yaw": -2.4422626549843223,
          "pitch": -0.039199984626087314,
          "rotation": 4.71238898038469,
          "target": "5-exterior-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-beverages",
      "name": "BEVERAGES",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.7252560477278687,
        "pitch": 0.0058348902408909,
        "fov": 1.5567488231102231
      },
      "linkHotspots": [
        {
          "yaw": -1.0224381907182707,
          "pitch": 0.01138074389391619,
          "rotation": 14.137166941154074,
          "target": "0-entry-view"
        },
        {
          "yaw": 0.7014694577545271,
          "pitch": -0.003079960180887298,
          "rotation": 4.71238898038469,
          "target": "1-cafe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-exterior",
      "name": "EXTERIOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.663508231848235,
        "pitch": 0.006893937800089844,
        "fov": 1.5567488231102231
      },
      "linkHotspots": [
        {
          "yaw": 2.277642857741988,
          "pitch": 0.16702996725234343,
          "rotation": 4.71238898038469,
          "target": "5-exterior-2"
        },
        {
          "yaw": 1.9984150993958965,
          "pitch": 0.3328302226086457,
          "rotation": 0,
          "target": "2-outside-table"
        },
        {
          "yaw": 1.6238555881166397,
          "pitch": 0.1719151241658654,
          "rotation": 0,
          "target": "0-entry-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-exterior-2",
      "name": "EXTERIOR 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.622298126389632,
        "pitch": -0.02912597716411902,
        "fov": 1.46374698578483
      },
      "linkHotspots": [
        {
          "yaw": 1.0276884520554361,
          "pitch": 0.12775374373848436,
          "rotation": 7.0685834705770345,
          "target": "4-exterior"
        },
        {
          "yaw": 1.4309030317708356,
          "pitch": 0.1323532357253292,
          "rotation": 7.853981633974483,
          "target": "0-entry-view"
        },
        {
          "yaw": 1.4855639305362311,
          "pitch": 0.5276403356167751,
          "rotation": 0.7853981633974483,
          "target": "2-outside-table"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "WEMART 4",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
