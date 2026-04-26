var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "LIVING ROOM",
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
        "yaw": 0.39856203176335114,
        "pitch": 0.005639270480301661,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.1403143621214298,
          "pitch": 0.3985833022133338,
          "rotation": 0,
          "target": "1-dinning-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dinning-hall",
      "name": "DINNING HALL",
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
        "yaw": -2.3154747869513255,
        "pitch": -0.010389796070917612,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.3174252884230704,
          "pitch": 0.18934480145304455,
          "rotation": 0,
          "target": "2-wash-atea"
        },
        {
          "yaw": -1.1592010879473307,
          "pitch": 0.3387036332040516,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": 2.379403254487877,
          "pitch": 0.4216054974963619,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wash-atea",
      "name": "WASH ATEA",
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
        "yaw": 1.1170779288983574,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.461760964163048,
          "pitch": 0.268649943108624,
          "rotation": 0,
          "target": "1-dinning-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "KITCHEN",
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
        "yaw": 0.0002915840000135006,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.4523021142251054,
          "pitch": 0.3847957321986808,
          "rotation": 0.7853981633974483,
          "target": "1-dinning-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "PROJECT",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
