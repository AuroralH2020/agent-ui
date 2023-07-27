import { ItemType, PropUnitDataType } from '@core/models/item.model'

const sensor = '#62b4c1'
const heatingSensor = '#3d909c'
const boilerSensor = '#296068'
const pv = '#143034'
const actuator = '#8DA572'

export const itemTypes: ItemType[] = [
  {
    id: '0',
    title: '',
    icon: 'question',
    color: '#f4ad09',
  },
  {
    id: '1',
    title: 'Device',
    icon: 'rss',
    color: '#00B6EB',
  },
  {
    id: '2',
    title: 'Service',
    icon: 'cloud',
    color: '#E5B38E',
  },
  {
    id: '3',
    title: 'Thing',
    icon: 'circle',
    color: '#979797',
  },
  {
    id: '4',
    title: 'Sensor',
    icon: 'gauge-simple-high',
    color: sensor,
  },
  {
    id: '5',
    title: 'QRGeneratorSensor',
    icon: 'qrcode',
    color: sensor,
  },
  {
    id: '6',
    title: 'PersonCounterSensor',
    icon: 'stopwatch-20',
    color: sensor,
  },
  {
    id: '7',
    title: 'FloodSensor',
    icon: 'droplet',
    color: sensor,
  },
  {
    id: '8',
    title: 'EnergyMonitor',
    icon: 'bolt',
    color: sensor,
  },
  {
    id: '9',
    title: 'MotionSensor',
    icon: 'person-walking',
    color: sensor,
  },
  {
    id: '10',
    title: 'HumiditySensor',
    icon: 'droplet',
    color: sensor,
  },
  {
    id: '11',
    title: 'Thermometer',
    icon: 'temperature-three-quarters',
    color: sensor,
  },
  {
    id: '12',
    title: 'GPSEmergencyButton',
    icon: 'truck-medical',
    color: sensor,
  },
  {
    id: '13',
    title: 'WaterAMRSensor',
    icon: 'droplet',
    color: sensor,
  },
  {
    id: '14',
    title: 'Accelerometer',
    icon: 'gauge-simple-high',
    color: sensor,
  },
  {
    id: '15',
    title: 'PressureSensor',
    icon: 'gauge-simple-high',
    color: sensor,
  },
  {
    id: '16',
    title: 'SoundSensor',
    icon: 'volume-low',
    color: sensor,
  },
  {
    id: '17',
    title: 'UltrasoundSensor',
    icon: 'volume-low',
    color: sensor,
  },
  {
    id: '18',
    title: 'MonitoringSensor',
    icon: 'eye',
    color: sensor,
  },
  {
    id: '19',
    title: 'WeatherSensor',
    icon: 'sun',
    color: sensor,
  },
  {
    id: '20',
    title: 'WasteBinSensor',
    icon: 'trash-can',
    color: sensor,
  },
  {
    id: '21',
    title: 'SoilMoistureSEnsor',
    icon: 'droplet',
    color: sensor,
  },
  {
    id: '22',
    title: 'LightBulb',
    icon: 'lightbulb',
    color: sensor,
  },
  {
    id: '23',
    title: 'AirQualitySensor',
    icon: 'wind',
    color: sensor,
  },
  {
    id: '24',
    title: 'Presence_Sensor',
    icon: 'person-walking',
    color: sensor,
  },
  {
    id: '25',
    title: 'SmartPlug',
    icon: 'plug',
    color: sensor,
  },
  {
    id: '26',
    title: 'BatterySensor',
    icon: 'battery-three-quarters',
    color: sensor,
  },
  {
    id: '27',
    title: 'HeatingSensor',
    icon: 'temperature-three-quarters',
    color: heatingSensor,
  },
  {
    id: '28',
    title: 'CoolingSensor',
    icon: 'snowflake',
    color: heatingSensor,
  },
  {
    id: '29',
    title: 'AirConditionningBasic',
    icon: 'snowflake',
    color: heatingSensor,
  },
  {
    id: '30',
    title: 'HeatPumpAirtoWater',
    icon: 'droplet',
    color: heatingSensor,
  },
  {
    id: '31',
    title: 'HeatPumpAirtoAir',
    icon: 'wind',
    color: heatingSensor,
  },
  {
    id: '32',
    title: 'BoilerSensor',
    icon: 'fire-flame-simple',
    color: boilerSensor,
  },
  {
    id: '33',
    title: 'BoilerOil',
    icon: 'oil-can',
    color: boilerSensor,
  },
  {
    id: '34',
    title: 'BoilerNgas',
    icon: 'fire-flame-simple',
    color: boilerSensor,
  },
  {
    id: '35',
    title: 'BoilerBiomass',
    icon: 'tree',
    color: boilerSensor,
  },
  {
    id: '36',
    title: 'PV',
    icon: 'solar-panel',
    color: pv,
  },
  {
    id: '37',
    title: 'PVGround',
    icon: 'solar-panel',
    color: pv,
  },
  {
    id: '38',
    title: 'PVRoofStanled',
    icon: 'solar-panel',
    color: pv,
  },
  {
    id: '39',
    title: 'PVRoofFlat',
    icon: 'solar-panel',
    color: pv,
  },
  {
    id: '40',
    title: 'PVFaçade',
    icon: 'solar-panel',
    color: pv,
  },
  {
    id: '41',
    title: 'PVBIntegrated',
    icon: 'solar-panel',
    color: pv,
  },
  {
    id: '42',
    title: 'Actuator',
    icon: 'power-off',
    color: actuator,
  },
  {
    id: '43',
    title: 'WaterValveActuator',
    icon: 'faucet-drip',
    color: actuator,
  },
  {
    id: '44',
    title: 'Switch',
    icon: 'toggle-on',
    color: actuator,
  },
  {
    id: '45',
    title: 'Relay',
    icon: 'power-off',
    color: actuator,
  },
  {
    id: '46',
    title: 'SmartValve',
    icon: 'faucet-drip',
    color: actuator,
  },
]

export const unitDataTypes: PropUnitDataType[] = [
  {
    name: 'number',
    symbol: '123',
  },
  {
    name: 'integer',
    symbol: 'int',
  },
  {
    name: 'boolean',
    symbol: 'bool',
  },
  {
    name: 'string',
    symbol: 'abc',
  },
  {
    name: 'object',
    symbol: '{}',
  },
  {
    name: 'array',
    symbol: '[]',
  },
]
