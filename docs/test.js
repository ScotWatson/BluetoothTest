/*
(c) 2023 Scot Watson  All Rights Reserved
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const initPageTime = performance.now();

const asyncWindow = new Promise(function (resolve, reject) {
  window.addEventListener("load", function (evt) {
    resolve(evt);
  });
});

(async function () {
  try {
    const modules = await Promise.all( [ asyncWindow ] );
    start(modules);
  } catch (e) {
    console.error(e);
    throw e;
  }
})();

const serviceUUIDs = [ 
  {
    uuid: 0x1800,
    name: "Generic Access",
    id: "org.bluetooth.service.generic_access",
  },
  {
    uuid: 0x1801,
    name: "Generic Attribute",
    id: "org.bluetooth.service.generic_attribute",
  },
  {
    uuid: 0x1802,
    name: "Immediate Alert",
    id: "org.bluetooth.service.immediate_alert",
  },
  {
    uuid: 0x1803,
    name: "Link Loss",
    id: "org.bluetooth.service.link_loss",
  },
  {
    uuid: 0x1804,
    name: "Tx Power",
    id: "org.bluetooth.service.tx_power",
  },
  {
    uuid: 0x1805,
    name: "Current Time",
    id: "org.bluetooth.service.current_time",
  },
  {
    uuid: 0x1806,
    name: "Reference Time Update",
    id: "org.bluetooth.service.reference_time_update",
  },
  {
    uuid: 0x1807,
    name: "Next DST Change",
    id: "org.bluetooth.service.next_dst_change",
  },
  {
    uuid: 0x1808,
    name: "Glucose",
    id: "org.bluetooth.service.glucose",
  },
  {
    uuid: 0x1809,
    name: "Health Thermometer",
    id: "org.bluetooth.service.health_thermometer",
  },
  {
    uuid: 0x180A,
    name: "Device Information",
    id: "org.bluetooth.service.device_information",
  },
  {
    uuid: 0x180D,
    name: "Heart Rate",
    id: "org.bluetooth.service.heart_rate",
  },
  {
    uuid: 0x180E,
    name: "Phone Alert Status",
    id: "org.bluetooth.service.phone_alert_status",
  },
  {
    uuid: 0x180F,
    name: "Battery",
    id: "org.bluetooth.service.battery_service",
  },
  {
    uuid: 0x1810,
    name: "Blood Pressure",
    id: "org.bluetooth.service.blood_pressure",
  },
  {
    uuid: 0x1811,
    name: "Alert Notification",
    id: "org.bluetooth.service.alert_notification",
  },
  {
    uuid: 0x1812,
    name: "Human Interface Device",
    id: "org.bluetooth.service.human_interface_device",
  },
  {
    uuid: 0x1813,
    name: "Scan Parameters",
    id: "org.bluetooth.service.scan_parameters",
  },
  {
    uuid: 0x1814,
    name: "Running Speed and Cadence",
    id: "org.bluetooth.service.running_speed_and_cadence",
  },
  {
    uuid: 0x1815,
    name: "Automation IO",
    id: "org.bluetooth.service.automation_io",
  },
  {
    uuid: 0x1816,
    name: "Cycling Speed and Cadence",
    id: "org.bluetooth.service.cycling_speed_and_cadence",
  },
  {
    uuid: 0x1818,
    name: "Cycling Power",
    id: "org.bluetooth.service.cycling_power",
  },
  {
    uuid: 0x1819,
    name: "Location and Navigation",
    id: "org.bluetooth.service.location_and_navigation",
  },
  {
    uuid: 0x181A,
    name: "Environmental Sensing",
    id: "org.bluetooth.service.environmental_sensing",
  },
  {
    uuid: 0x181B,
    name: "Body Composition",
    id: "org.bluetooth.service.body_composition",
  },
  {
    uuid: 0x181C,
    name: "User Data",
    id: "org.bluetooth.service.user_data",
  },
  {
    uuid: 0x181D,
    name: "Weight Scale",
    id: "org.bluetooth.service.weight_scale",
  },
  {
    uuid: 0x181E,
    name: "Bond Management",
    id: "org.bluetooth.service.bond_management",
  },
  {
    uuid: 0x181F,
    name: "Continuous Glucose Monitoring",
    id: "org.bluetooth.service.continuous_glucose_monitoring",
  },
  {
    uuid: 0x1820,
    name: "Internet Protocol Support",
    id: "org.bluetooth.service.internet_protocol_support",
  },
  {
    uuid: 0x1821,
    name: "Indoor Positioning",
    id: "org.bluetooth.service.indoor_positioning",
  },
  {
    uuid: 0x1822,
    name: "Pulse Oximeter",
    id: "org.bluetooth.service.pulse_oximeter",
  },
  {
    uuid: 0x1823,
    name: "HTTP Proxy",
    id: "org.bluetooth.service.http_proxy",
  },
  {
    uuid: 0x1824,
    name: "Transport Discovery",
    id: "org.bluetooth.service.transport_discovery",
  },
  {
    uuid: 0x1825,
    name: "Object Transfer",
    id: "org.bluetooth.service.object_transfer",
  },
  {
    uuid: 0x1826,
    name: "Fitness Machine",
    id: "org.bluetooth.service.fitness_machine",
  },
  {
    uuid: 0x1827,
    name: "Mesh Provisioning",
    id: "org.bluetooth.service.mesh_provisioning",
  },
  {
    uuid: 0x1828,
    name: "Mesh Proxy",
    id: "org.bluetooth.service.mesh_proxy",
  },
  {
    uuid: 0x1829,
    name: "Reconnection Configuration",
    id: "org.bluetooth.service.reconnection_configuration",
  },
  {
    uuid: 0x183A,
    name: "Insulin Delivery",
    id: "org.bluetooth.service.insulin_delivery",
  },
  {
    uuid: 0x183B,
    name: "Binary Sensor",
    id: "org.bluetooth.service.binary_sensor",
  },
  {
    uuid: 0x183C,
    name: "Emergency Configuration",
    id: "org.bluetooth.service.emergency_configuration",
  },
  {
    uuid: 0x183D,
    name: "Authorization Control",
    id: "org.bluetooth.service.authorization_control",
  },
  {
    uuid: 0x183E,
    name: "Physical Activity Monitor",
    id: "org.bluetooth.service.physical_activity_monitor",
  },
  {
    uuid: 0x183F,
    name: "Elapsed Time",
    id: "org.bluetooth.service.elapsed_time",
  },
  {
    uuid: 0x1840,
    name: "Generic Health Sensor",
    id: "org.bluetooth.service.generic_health_sensor",
  },
  {
    uuid: 0x1843,
    name: "Audio Input Control",
    id: "org.bluetooth.service.audio_input_control",
  },
  {
    uuid: 0x1844,
    name: "Volume Control",
    id: "org.bluetooth.service.volume_control",
  },
  {
    uuid: 0x1845,
    name: "Volume Offset Control",
    id: "org.bluetooth.service.volume_offset",
  },
  {
    uuid: 0x1846,
    name: "Coordinated Set Identification",
    id: "org.bluetooth.service.coordinated_set_identification",
  },
  {
    uuid: 0x1847,
    name: "Device Time",
    id: "org.bluetooth.service.device_time",
  },
  {
    uuid: 0x1848,
    name: "Media Control",
    id: "org.bluetooth.service.media_control",
  },
  {
    uuid: 0x1849,
    name: "Generic Media Control",
    id: "org.bluetooth.service.generic_media_control",
  },
  {
    uuid: 0x184A,
    name: "Constant Tone Extension",
    id: "org.bluetooth.service.constant_tone_extension",
  },
  {
    uuid: 0x184B,
    name: "Telephone Bearer",
    id: "org.bluetooth.service.telephone_bearer",
  },
  {
    uuid: 0x184C,
    name: "Generic Telephone Bearer",
    id: "org.bluetooth.service.generic_telephone_bearer",
  },
  {
    uuid: 0x184D,
    name: "Microphone Control",
    id: "org.bluetooth.service.microphone_control",
  },
  {
    uuid: 0x184E,
    name: "Audio Stream Control",
    id: "org.bluetooth.service.audio_stream_control",
  },
  {
    uuid: 0x184F,
    name: "Broadcast Audio Scan",
    id: "org.bluetooth.service.broadcast_audio_scan",
  },
  {
    uuid: 0x1850,
    name: "Published Audio Capabilities",
    id: "org.bluetooth.service.published_audio_capabilities",
  },
  {
    uuid: 0x1851,
    name: "Basic Audio Announcement",
    id: "org.bluetooth.service.basic_audio_announcement",
  },
  {
    uuid: 0x1852,
    name: "Broadcast Audio Announcement",
    id: "org.bluetooth.service.broadcast_audio_announcement",
  },
  {
    uuid: 0x1853,
    name: "Common Audio",
    id: "org.bluetooth.service.common_audio",
  },
  {
    uuid: 0x1854,
    name: "Hearing Access",
    id: "org.bluetooth.service.hearing_access",
  },
  {
    uuid: 0x1855,
    name: "Telephony and Media Audio",
    id: "org.bluetooth.service.telephony_and_media_audio",
  },
  {
    uuid: 0x1856,
    name: "Public Broadcast Announcement",
    id: "org.bluetooth.service.public_broadcast_announcement",
  },
  {
    uuid: 0x1857,
    name: "Electronic Shelf Label",
    id: "org.bluetooth.service.electronic_shelf_label",
  },
  {
    uuid: 0x1858,
    name: "Gaming Audio",
    id: "org.bluetooth.service.gaming_audio",
  },
  {
    uuid: 0x1859,
    name: "Mesh Proxy Solicitation",
    id: "org.bluetooth.service.mesh_proxy_solicitation",
  },
];
const mapServiceUUIDs = new Map();
for (const uuid of serviceUUIDs) {
  mapServiceUUIDs.set(uuid.uuid, uuid);
}

async function start( [ evtWindow ] ) {
  try {
    if (!(navigator.bluetooth)) {
      throw "Bluetooth not supported";
    }
    if (!(navigator.bluetooth.getAvailability())) {
      throw "Bluetooth not available";
    }
    (async function () {
      const bluetooth = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
      });
      document.body.appendChild(document.createTextNode(bluetooth.name));
      document.body.appendChild(document.createTextNode(bluetooth.id));
      const connectedBluetooth = await bluetooth.gatt.connect();
      for (const serviceUUID of mapServiceUUIDs.keys()) {
        const services = await connectedBluetooth.getPrimaryServices(serviceUUID);
        for (const service of services) {
          await showService(service);
        }
      }
      async function showService(service) {
        const entry = mapServiceUUIDs.get(service.uuid);
        entry.name
        entry.id
        service.isPrimary;
        const characteristics = service.getCharacteristics(characteristicsUUID);
        for (const characteristic of characteristics) {
          const descriptors = characteristic.getDescriptors(descriptorUUID);
          for (const descriptor of descriptors) {
            descriptor.value;
            await descriptor.readValue();
            await descriptor.writeValue();
          }
          characteristic.readValue();
          characteristic.startNotifications();
          characteristic.stopNotifications();
          characteristic.writeValueWithoutResponse();
          characteristic.writeValueWithResponse();
        }
      }
    })();
  } catch (e) {
    console.log(e);
  }
}
