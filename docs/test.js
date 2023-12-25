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

const characteristicUUIDs = [
  {
    uuid: 0x2A00,
    name: "Device Name",
    id: "org.bluetooth.characteristic.gap.device_name",
  },
  {
    uuid: "0x2A01",
    name: "Appearance",
    id: "org.bluetooth.characteristic.gap.appearance",
  },
  {
    uuid: 0x2A02,
    name: "Peripheral Privacy Flag",
    id: "org.bluetooth.characteristic.gap.peripheral_privacy_flag",
  },
  {
    uuid: 0x2A03,
    name: "Reconnection Address",
    id: "org.bluetooth.characteristic.gap.reconnection_address",
  },
  {
    uuid: 0x2A04,
    name: "Peripheral Preferred Connection Parameters",
    id: "org.bluetooth.characteristic.gap.peripheral_preferred_connection_parameters",
  },
  {
    uuid: 0x2A05,
    name: "Service Changed",
    id: "org.bluetooth.characteristic.gatt.service_changed",
  },
  {
    uuid: 0x2A06,
    name: "Alert Level",
    id: "org.bluetooth.characteristic.alert_level",
  },
  {
    uuid: 0x2A07,
    name: "Tx Power Level",
    id: "org.bluetooth.characteristic.tx_power_level",
  },
  {
    uuid: 0x2A08,
    name: "Date Time",
    id: "org.bluetooth.characteristic.date_time",
  },
  {
    uuid: 0x2A09,
    name: "Day of Week",
    id: "org.bluetooth.characteristic.day_of_week",
  },
  {
    uuid: 0x2A0A,
    name: "Day Date Time",
    id: "org.bluetooth.characteristic.day_date_time",
  },
  {
    uuid: 0x2A0C,
    name: "Exact Time 256",
    id: "org.bluetooth.characteristic.exact_time_256",
  },
  {
    uuid: 0x2A0D,
    name: "DST Offset",
    id: "org.bluetooth.characteristic.dst_offset",
  },
  {
    uuid: 0x2A0E,
    name: "Time Zone",
    id: "org.bluetooth.characteristic.time_zone",
  },
  {
    uuid: 0x2A0F,
    name: "Local Time Information",
    id: "org.bluetooth.characteristic.local_time_information",
  },
  {
    uuid: 0x2A11,
    name: "Time with DST",
    id: "org.bluetooth.characteristic.time_with_dst",
  },
  {
    uuid: 0x2A12,
    name: "Time Accuracy",
    id: "org.bluetooth.characteristic.time_accuracy",
  },
  {
    uuid: 0x2A13,
    name: "Time Source",
    id: "org.bluetooth.characteristic.time_source",
  },
  {
    uuid: 0x2A14,
    name: "Reference Time Information",
    id: "org.bluetooth.characteristic.reference_time_information",
  },
  {
    uuid: 0x2A16,
    name: "Time Update Control Point",
    id: "org.bluetooth.characteristic.time_update_control_point",
  },
  {
    uuid: 0x2A17,
    name: "Time Update State",
    id: "org.bluetooth.characteristic.time_update_state",
  },
  {
    uuid: 0x2A18,
    name: "Glucose Measurement",
    id: "org.bluetooth.characteristic.glucose_measurement",
  },
  {
    uuid: 0x2A19,
    name: "Battery Level",
    id: "org.bluetooth.characteristic.battery_level",
  },
  {
    uuid: 0x2A1C,
    name: "Temperature Measurement",
    id: "org.bluetooth.characteristic.temperature_measurement",
  },
  {
    uuid: 0x2A1D,
    name: "Temperature Type",
    id: "org.bluetooth.characteristic.temperature_type",
  },
  {
    uuid: 0x2A1E,
    name: "Intermediate Temperature",
    id: "org.bluetooth.characteristic.intermediate_temperature",
  },
  {
    uuid: 0x2A21,
    name: "Measurement Interval",
    id: "org.bluetooth.characteristic.measurement_interval",
  },
  {
    uuid: 0x2A22,
    name: "Boot Keyboard Input Report",
    id: "org.bluetooth.characteristic.boot_keyboard_input_report",
  },
  {
    uuid: 0x2A23,
    name: "System ID",
    id: "org.bluetooth.characteristic.system_id",
  },
  {
    uuid: 0x2A24,
    name: "Model Number String",
    id: "org.bluetooth.characteristic.model_number_string",
  },
  {
    uuid: 0x2A25,
    name: "Serial Number String",
    id: "org.bluetooth.characteristic.serial_number_string",
  },
  {
    uuid: 0x2A26,
    name: "Firmware Revision String",
    id: "org.bluetooth.characteristic.firmware_revision_string",
  },
  {
    uuid: 0x2A27,
    name: "Hardware Revision String",
    id: "org.bluetooth.characteristic.hardware_revision_string",
  },
  {
    uuid: 0x2A28,
    name: "Software Revision String",
    id: "org.bluetooth.characteristic.software_revision_string",
  },
  {
    uuid: 0x2A29,
    name: "Manufacturer Name String",
    id: "org.bluetooth.characteristic.manufacturer_name_string",
  },
  {
    uuid: 0x2A2A,
    name: "IEEE 11073-20601 Regulatory Certification Data List",
    id: "org.bluetooth.characteristic.ieee_11073-20601_regulatory_certification_data_list",
  },
  {
    uuid: 0x2A2B,
    name: "Current Time",
    id: "org.bluetooth.characteristic.current_time",
  },
  {
    uuid: 0x2A2C,
    name: "Magnetic Declination",
    id: "org.bluetooth.characteristic.magnetic_declination",
  },
  {
    uuid: 0x2A31,
    name: "Scan Refresh",
    id: "org.bluetooth.characteristic.scan_refresh",
  },
  {
    uuid: 0x2A32,
    name: "Boot Keyboard Output Report",
    id: "org.bluetooth.characteristic.boot_keyboard_output_report",
  },
  {
    uuid: 0x2A33,
    name: "Boot Mouse Input Report",
    id: "org.bluetooth.characteristic.boot_mouse_input_report",
  },
  {
    uuid: 0x2A34,
    name: "Glucose Measurement Context",
    id: "org.bluetooth.characteristic.glucose_measurement_context",
  },
  {
    uuid: 0x2A35,
    name: "Blood Pressure Measurement",
    id: "org.bluetooth.characteristic.blood_pressure_measurement",
  },
  {
    uuid: 0x2A36,
    name: "Intermediate Cuff Pressure",
    id: "org.bluetooth.characteristic.intermediate_cuff_pressure",
  },
  {
    uuid: 0x2A37,
    name: "Heart Rate Measurement",
    id: "org.bluetooth.characteristic.heart_rate_measurement",
  },
  {
    uuid: 0x2A38,
    name: "Body Sensor Location",
    id: "org.bluetooth.characteristic.body_sensor_location",
  },
  {
    uuid: 0x2A39,
    name: "Heart Rate Control Point",
    id: "org.bluetooth.characteristic.heart_rate_control_point",
  },
  {
    uuid: 0x2A3F,
    name: "Alert Status",
    id: "org.bluetooth.characteristic.alert_status",
  },
  {
    uuid: 0x2A40,
    name: "Ringer Control Point",
    id: "org.bluetooth.characteristic.ringer_control_point",
  },
  {
    uuid: 0x2A41,
    name: "Ringer Setting",
    id: "org.bluetooth.characteristic.ringer_setting",
  },
  {
    uuid: 0x2A42,
    name: "Alert Category ID Bit Mask",
    id: "org.bluetooth.characteristic.a,lert_category_id_bit_mask",
  },
  {
    uuid: 0x2A43,
    name: "Alert Category ID",
    id: "org.bluetooth.characteristic.alert_category_id",
  },
  {
    uuid: 0x2A44,
    name: "Alert Notification Control Point",
    id: "org.bluetooth.characteristic.alert_n,otification_control_point",
  },
  {
    uuid: 0x2A45,
    name: "Unread Alert Status",
    id: "org.bluetooth.characteristic.unread_alert_status",
  },
  {
    uuid: 0x2A46,
    name: "New Alert",
    id: "org.bluetooth.characteristic.new_alert",
  },
  {
    uuid: 0x2A47,
    name: "Supported New Alert Category",
    id: "org.bluetooth.characteristic.supported_new_alert_category",
  },
  {
    uuid: 0x2A48,
    name: "Supported Unread Alert Category",
    id: "org.bluetooth.characteristic.supported_unread_alert_category",
  },
  {
    uuid: 0x2A49,
    name: "Blood Pressure Feature",
    id: "org.bluetooth.characteristic.blood_pressure_feature",
  },
  {
    uuid: 0x2A4A,
    name: "HID Information",
    id: "org.bluetooth.characteristic.hid_information",
  },
  {
    uuid: 0x2A4B,
    name: "Report Map",
    id: "org.bluetooth.characteristic.report_map",
  },
  {
    uuid: 0x2A4C,
    name: "HID Control Point",
    id: "org.bluetooth.characteristic.hid_control_point",
  },
  {
    uuid: 0x2A4D,
    name: "Report",
    id: "org.bluetooth.characteristic.report",
  },
  {
    uuid: 0x2A4E,
    name: "Protocol Mode",
    id: "org.bluetooth.characteristic.protocol_mode",
  },
  {
    uuid: 0x2A4F,
    name: "Scan Interval Window",
    id: "org.bluetooth.characteristic.scan_interval_window",
  },
  {
    uuid: 0x2A50,
    name: "PnP ID",
    id: "org.bluetooth.characteristic.pnp_id",
  },
  {
    uuid: 0x2A51,
    name: "Glucose Feature",
    id: "org.bluetooth.characteristic.glucose_feature",
  },
  {
    uuid: 0x2A52,
    name: "Record Access Control Point",
    id: "org.bluetooth.characteristic.record_access_control_point",
  },
  {
    uuid: 0x2A53,
    name: "RSC Measurement",
    id: "org.bluetooth.characteristic.rsc_measurement",
  },
  {
    uuid: 0x2A54,
    name: "RSC Feature",
    id: "org.bluetooth.characteristic.rsc_feature",
  },
  {
    uuid: 0x2A55,
    name: "SC Control Point",
    id: "org.bluetooth.characteristic.sc_control_point",
  },
  {
    uuid: 0x2A5A,
    name: "Aggregate",
    id: "org.bluetooth.characteristic.aggregate",
  },
  {
    uuid: 0x2A5B,
    name: "CSC Measurement",
    id: "org.bluetooth.characteristic.csc_measurement",
  },
  {
    uuid: 0x2A5C,
    name: "CSC Feature",
    id: "org.bluetooth.characteristic.csc_feature",
  },
  {
    uuid: 0x2A5D,
    name: "Sensor Location",
    id: "org.bluetooth.characteristic.sensor_location",
  },
  {
    uuid: 0x2A5E,
    name: "PLX Spot-Check Measurement",
    id: "org.bluetooth.characteristic.plx_spot_check_measurement",
  },
  {
    uuid: 0x2A5F,
    name: "PLX Continuous Measurement",
    id: "org.bluetooth.characteristic.plx_continuous_measurement",
  },
  {
    uuid: 0x2A60,
    name: "PLX Features",
    id: "org.bluetooth.characteristic.plx_features",
  },
  {
    uuid: 0x2A63,
    name: "Cycling Power Measurement",
    id: "org.bluetooth.characteristic.cycling_power_measurement",
  },
  {
    uuid: 0x2A64,
    name: "Cycling Power Vector",
    id: "org.bluetooth.characteristic.cycling_power_vector",
  },
  {
    uuid: 0x2A65,
    name: "Cycling Power Feature",
    id: "org.bluetooth.characteristic.cycling_power_feature",
  },
  {
    uuid: 0x2A66,
    name: "Cycling Power Control Point",
    id: "org.bluetooth.characteristic.cycling_power_control_point",
  },
  {
    uuid: 0x2A67,
    name: "Location and Speed",
    id: "org.bluetooth.characteristic.location_and_speed",
  },
  {
    uuid: 0x2A68,
    name: "Navigation",
    id: "org.bluetooth.characteristic.navigation",
  },
  {
    uuid: 0x2A69,
    name: "Position Quality",
    id: "org.bluetooth.characteristic.position_quality",
  },
  {
    uuid: 0x2A6A,
    name: "LN Feature",
    id: "org.bluetooth.characteristic.ln_feature",
  },
  {
    uuid: 0x2A6B,
    name: "LN Control Point",
    id: "org.bluetooth.characteristic.ln_control_point",
  },
  {
    uuid: 0x2A6C,
    name: "Elevation",
    id: "org.bluetooth.characteristic.elevation",
  },
  {
    uuid: 0x2A6D,
    name: "Pressure",
    id: "org.bluetooth.characteristic.pressure",
  },
  {
    uuid: 0x2A6E,
    name: "Temperature",
    id: "org.bluetooth.characteristic.temperature",
  },
  {
    uuid: 0x2A6F,
    name: "Humidity",
    id: "org.bluetooth.characteristic.humidity",
  },
  {
    uuid: 0x2A70,
    name: "True Wind Speed",
    id: "org.bluetooth.characteristic.true_wind_speed",
  },
  {
    uuid: 0x2A71,
    name: "True Wind Direction",
    id: "org.bluetooth.characteristic.true_wind_direction",
  },
  {
    uuid: 0x2A72,
    name: "Apparent Wind Speed",
    id: "org.bluetooth.characteristic.apparent_wind_speed",
  },
  {
    uuid: 0x2A73,
    name: "Apparent Wind Direction",
    id: "org.bluetooth.characteristic.apparent_wind_direction",
  },
  {
    uuid: 0x2A74,
    name: "Gust Factor",
    id: "org.bluetooth.characteristic.gust_factor",
  },
  {
    uuid: 0x2A75,
    name: "Pollen Concentration",
    id: "org.bluetooth.characteristic.pollen_concentration",
  },
  {
    uuid: 0x2A76,
    name: "UV Index",
    id: "org.bluetooth.characteristic.uv_index",
  },
  {
    uuid: 0x2A77,
    name: "Irradiance",
    id: "org.bluetooth.characteristic.irradiance",
  },
  {
    uuid: 0x2A78,
    name: "Rainfall",
    id: "org.bluetooth.characteristic.rainfall",
  },
  {
    uuid: 0x2A79,
    name: "Wind Chill",
    id: "org.bluetooth.characteristic.wind_chill",
  },
  {
    uuid: 0x2A7A,
    name: "Heat Index",
    id: "org.bluetooth.characteristic.heat_index",
  },
  {
    uuid: 0x2A7B,
    name: "Dew Point",
    id: "org.bluetooth.characteristic.dew_point",
  },
  {
    uuid: 0x2A7D,
    name: "Descriptor Value Changed",
    id: "org.bluetooth.characteristic.descriptor_value_changed",
  },
  {
    uuid: 0x2A7E,
    name: "Aerobic Heart Rate Lower Limit",
    id: "org.bluetooth.characteristic.aerobic_heart_rate_lower_limit",
  },
  {
    uuid: 0x2A7F,
    name: "Aerobic Threshold",
    id: "org.bluetooth.characteristic.aerobic_threshold",
  },
  {
    uuid: 0x2A80,
    name: "Age",
    id: "org.bluetooth.characteristic.age",
  },
  {
    uuid: 0x2A81,
    name: "Anaerobic Heart Rate Lower Limit",
    id: "org.bluetooth.characteristic.anaerobic_heart_rate_lower_limit",
  },
  {
    uuid: 0x2A82,
    name: "Anaerobic Heart Rate Upper Limit",
    id: "org.bluetooth.characteristic.anaerobic_heart_rate_upper_limit",
  },
  {
    uuid: 0x2A83,
    name: "Anaerobic Threshold",
    id: "org.bluetooth.characteristic.anaerobic_threshold",
  },
  {
    uuid: 0x2A84,
    name: "Aerobic Heart Rate Upper Limit",
    id: "org.bluetooth.characteristic.aerobic_heart_rate_upper_limit",
  },
  {
    uuid: 0x2A85,
    name: "Date of Birth",
    id: "org.bluetooth.characteristic.date_of_birth",
  },
  {
    uuid: 0x2A86,
    name: "Date of Threshold Assessment",
    id: "org.bluetooth.characteristic.date_of_threshold_assessment",
  },
  {
    uuid: 0x2A87,
    name: "Email Address",
    id: "org.bluetooth.characteristic.email_address",
  },
  {
    uuid: 0x2A88,
    name: "Fat Burn Heart Rate Lower Limit",
    id: "org.bluetooth.characteristic.fat_burn_heart_rate_lower_limit",
  },
  {
    uuid: 0x2A89,
    name: "Fat Burn Heart Rate Upper Limit",
    id: "org.bluetooth.characteristic.fat_burn_heart_rate_upper_limit",
  },
  {
    uuid: 0x2A8A,
    name: "First Name",
    id: "org.bluetooth.characteristic.first_name",
  },
  {
    uuid: 0x2A8B,
    name: "Five Zone Heart Rate Limits",
    id: "org.bluetooth.characteristic.five_zone_heart_rate_limits",
  },
  {
    uuid: 0x2A8C,
    name: "Gender",
    id: "org.bluetooth.characteristic.gender",
  },
  {
    uuid: 0x2A8D,
    name: "Heart Rate Max",
    id: "org.bluetooth.characteristic.heart_rate_max",
  },
  {
    uuid: 0x2A8E,
    name: "Height",
    id: "org.bluetooth.characteristic.height",
  },
  {
    uuid: 0x2A8F,
    name: "Hip Circumference",
    id: "org.bluetooth.characteristic.hip_circumference",
  },
  {
    uuid: 0x2A90,
    name: "Last Name",
    id: "org.bluetooth.characteristic.last_name",
  },
  {
    uuid: 0x2A91,
    name: "Maximum Recommended Heart Rate",
    id: "org.bluetooth.characteristic.maximum_recommended_heart_rate",
  },
  {
    uuid: 0x2A92,
    name: "Resting Heart Rate",
    id: "org.bluetooth.characteristic.resting_heart_rate",
  },
  {
    uuid: 0x2A93,
    name: "Sport Type for Aerobic and Anaerobic Thresholds",
    id: "org.bluetooth.characteristic.sport_type_for_aerobic_and_anaerobic_thresholds",
  },
  {
    uuid: 0x2A94,
    name: "Three Zone Heart Rate Limits",
    id: "org.bluetooth.characteristic.three_zone_heart_rate_limits",
  },
  {
    uuid: 0x2A95,
    name: "Two Zone Heart Rate Limits",
    id: "org.bluetooth.characteristic.two_zone_heart_rate_limits",
  },
  {
    uuid: 0x2A96,
    name: "VO2 Max",
    id: "org.bluetooth.characteristic.vo2_max",
  },
  {
    uuid: 0x2A97,
    name: "Waist Circumference",
    id: "org.bluetooth.characteristic.waist_circumference",
  },
  {
    uuid: 0x2A98,
    name: "Weight",
    id: "org.bluetooth.characteristic.weight",
  },
  {
    uuid: 0x2A99,
    name: "Database Change Increment",
    id: "org.bluetooth.characteristic.database_change_increment",
  },
  {
    uuid: 0x2A9A,
    name: "User Index",
    id: "org.bluetooth.characteristic.user_index",
  },
  {
    uuid: 0x2A9B,
    name: "Body Composition Feature",
    id: "org.bluetooth.characteristic.body_composition_feature",
  },
  {
    uuid: 0x2A9C,
    name: "Body Composition Measurement",
    id: "org.bluetooth.characteristic.body_composition_measurement",
  },
  {
    uuid: 0x2A9D,
    name: "Weight Measurement",
    id: "org.bluetooth.characteristic.weight_measurement",
  },
  {
    uuid: 0x2A9E,
    name: "Weight Scale Feature",
    id: "org.bluetooth.characteristic.weight_scale_feature",
  },
  {
    uuid: 0x2A9F,
    name: "User Control Point",
    id: "org.bluetooth.characteristic.user_control_point",
  },
  {
    uuid: 0x2AA0,
    name: "Magnetic Flux Density - 2D",
    id: "org.bluetooth.characteristic.magnetic_flux_density_2d",
  },
  {
    uuid: 0x2AA1,
    name: "Magnetic Flux Density - 3D",
    id: "org.bluetooth.characteristic.magnetic_flux_density_3d",
  },
  {
    uuid: 0x2AA2,
    name: "Language",
    id: "org.bluetooth.characteristic.language",
  },
  {
    uuid: 0x2AA3,
    name: "Barometric Pressure Trend",
    id: "org.bluetooth.characteristic.barometric_pressure_trend",
  },
  {
    uuid: 0x2AA4,
    name: "Bond Management Control Point",
    id: "org.bluetooth.characteristic.bond_management_control_point",
  },
  {
    uuid: 0x2AA5,
    name: "Bond Management Feature",
    id: "org.bluetooth.characteristic.bond_management_feature",
  },
  {
    uuid: 0x2AA6,
    name: "Central Address Resolution",
    id: "org.bluetooth.characteristic.gap.central_address_resolution",
  },
  {
    uuid: 0x2AA7,
    name: "CGM Measurement",
    id: "org.bluetooth.characteristic.cgm_measurement",
  },
  {
    uuid: 0x2AA8,
    name: "CGM Feature",
    id: "org.bluetooth.characteristic.cgm_feature",
  },
  {
    uuid: 0x2AA9,
    name: "CGM Status",
    id: "org.bluetooth.characteristic.cgm_status",
  },
  {
    uuid: 0x2AAA,
    name: "CGM Session Start Time",
    id: "org.bluetooth.characteristic.cgm_session_start_time",
  },
  {
    uuid: 0x2AAB,
    name: "CGM Session Run Time",
    id: "org.bluetooth.characteristic.cgm_session_run_time",
  },
  {
    uuid: 0x2AAC,
    name: "CGM Specific Ops Control Point",
    id: "org.bluetooth.characteristic.cgm_specific_ops_control_point",
  },
  {
    uuid: 0x2AAD,
    name: "Indoor Positioning Configuration",
    id: "org.bluetooth.characteristic.indoor_positioning_configuration",
  },
  {
    uuid: 0x2AAE,
    name: "Latitude",
    id: "org.bluetooth.characteristic.latitude",
  },
  {
    uuid: 0x2AAF,
    name: "Longitude",
    id: "org.bluetooth.characteristic.longitude",
  },
  {
    uuid: 0x2AB0,
    name: "Local North Coordinate",
    id: "org.bluetooth.characteristic.local_north_coordinate",
  },
  {
    uuid: 0x2AB1,
    name: "Local East Coordinate",
    id: "org.bluetooth.characteristic.local_east_coordinate",
  },
  {
    uuid: 0x2AB2,
    name: "Floor Number",
    id: "org.bluetooth.characteristic.floor_number",
  },
  {
    uuid: 0x2AB3,
    name: "Altitude",
    id: "org.bluetooth.characteristic.altitude",
  },
  {
    uuid: 0x2AB4,
    name: "Uncertainty",
    id: "org.bluetooth.characteristic.uncertainty",
  },
  {
    uuid: 0x2AB5,
    name: "Location Name",
    id: "org.bluetooth.characteristic.location_name",
  },
  {
    uuid: 0x2AB6,
    name: "URI",
    id: "org.bluetooth.characteristic.uri",
  },
  {
    uuid: 0x2AB7,
    name: "HTTP Headers",
    id: "org.bluetooth.characteristic.http_headers",
  },
  {
    uuid: 0x2AB8,
    name: "HTTP Status Code",
    id: "org.bluetooth.characteristic.http_status_code",
  },
  {
    uuid: 0x2AB9,
    name: "HTTP Entity Body",
    id: "org.bluetooth.characteristic.http_entity_body",
  },
  {
    uuid: 0x2ABA,
    name: "HTTP Control Point",
    id: "org.bluetooth.characteristic.http_control_point",
  },
  {
    uuid: 0x2ABB,
    name: "HTTPS Security",
    id: "org.bluetooth.characteristic.https_security",
  },
  {
    uuid: 0x2ABC,
    name: "TDS Control Point",
    id: "org.bluetooth.characteristic.tds_control_point",
  },
  {
    uuid: 0x2ABD,
    name: "OTS Feature",
    id: "org.bluetooth.characteristic.ots_feature",
  },
  {
    uuid: 0x2ABE,
    name: "Object Name",
    id: "org.bluetooth.characteristic.object_name",
  },
  {
    uuid: 0x2ABF,
    name: "Object Type",
    id: "org.bluetooth.characteristic.object_type",
  },
  {
    uuid: 0x2AC0,
    name: "Object Size",
    id: "org.bluetooth.characteristic.object_size",
  },
  {
    uuid: 0x2AC1,
    name: "Object First-Created",
    id: "org.bluetooth.characteristic.object_first_created",
  },
  {
    uuid: 0x2AC2,
    name: "Object Last-Modified",
    id: "org.bluetooth.characteristic.object_last_modified",
  },
  {
    uuid: 0x2AC3,
    name: "Object ID",
    id: "org.bluetooth.characteristic.object_id",
  },
  {
    uuid: 0x2AC4,
    name: "Object Properties",
    id: "org.bluetooth.characteristic.object_properties",
  },
  {
    uuid: 0x2AC5,
    name: "Object Action Control Point",
    id: "org.bluetooth.characteristic.object_action_control_point",
  },
  {
    uuid: 0x2AC6,
    name: "Object List Control Point",
    id: "org.bluetooth.characteristic.object_list_control_point",
  },
  {
    uuid: 0x2AC7,
    name: "Object List Filter",
    id: "org.bluetooth.characteristic.object_list_filter",
  },
  {
    uuid: 0x2AC8,
    name: "Object Changed",
    id: "org.bluetooth.characteristic.object_changed",
  },
  {
    uuid: 0x2AC9,
    name: "Resolvable Private Address Only",
    id: "org.bluetooth.characteristic.resolvable_private_address_only",
  },
  {
    uuid: 0x2ACC,
    name: "Fitness Machine Feature",
    id: "org.bluetooth.characteristic.fitness_machine_feature",
  },
  {
    uuid: 0x2ACD,
    name: "Treadmill Data",
    id: "org.bluetooth.characteristic.treadmill_data",
  },
  {
    uuid: 0x2ACE,
    name: "Cross Trainer Data",
    id: "org.bluetooth.characteristic.cross_trainer_data",
  },
  {
    uuid: 0x2ACF,
    name: "Step Climber Data",
    id: "org.bluetooth.characteristic.step_climber_data",
  },
  {
    uuid: 0x2AD0,
    name: "Stair Climber Data",
    id: "org.bluetooth.characteristic.stair_climber_data",
  },
  {
    uuid: 0x2AD1,
    name: "Rower Data",
    id: "org.bluetooth.characteristic.rower_data",
  },
  {
    uuid: 0x2AD2,
    name: "Indoor Bike Data",
    id: "org.bluetooth.characteristic.indoor_bike_data",
  },
  {
    uuid: 0x2AD3,
    name: "Training Status",
    id: "org.bluetooth.characteristic.training_status",
  },
  {
    uuid: 0x2AD4,
    name: "Supported Speed Range",
    id: "org.bluetooth.characteristic.supported_speed_range",
  },
  {
    uuid: 0x2AD5,
    name: "Supported Inclination Range",
    id: "org.bluetooth.characteristic.supported_inclination_range",
  },
  {
    uuid: 0x2AD6,
    name: "Supported Resistance Level Range",
    id: "org.bluetooth.characteristic.supported_resistance_level_range",
  },
  {
    uuid: 0x2AD7,
    name: "Supported Heart Rate Range",
    id: "org.bluetooth.characteristic.supported_heart_rate_range",
  },
  {
    uuid: 0x2AD8,
    name: "Supported Power Range",
    id: "org.bluetooth.characteristic.supported_power_range",
  },
  {
    uuid: 0x2AD9,
    name: "Fitness Machine Control Point",
    id: "org.bluetooth.characteristic.fitness_machine_control_point",
  },
  {
    uuid: 0x2ADA,
    name: "Fitness Machine Status",
    id: "org.bluetooth.characteristic.fitness_machine_status",
  },
  {
    uuid: 0x2ADB,
    name: "Mesh Provisioning Data In",
    id: "org.bluetooth.characteristic.mesh_provisioning_data_in",
  },
  {
    uuid: 0x2ADC,
    name: "Mesh Provisioning Data Out",
    id: "org.bluetooth.characteristic.mesh_provisioning_data_out",
  },
  {
    uuid: 0x2ADD,
    name: "Mesh Proxy Data In",
    id: "org.bluetooth.characteristic.mesh_proxy_data_in",
  },
  {
    uuid: 0x2ADE,
    name: "Mesh Proxy Data Out",
    id: "org.bluetooth.characteristic.mesh_proxy_data_out",
  },
  {
    uuid: 0x2AE0,
    name: "Average Current",
    id: "org.bluetooth.characteristic.average_current",
  },
  {
    uuid: 0x2AE1,
    name: "Average Voltage",
    id: "org.bluetooth.characteristic.average_voltage",
  },
  {
    uuid: 0x2AE2,
    name: "Boolean",
    id: "org.bluetooth.characteristic.boolean",
  },
  {
    uuid: 0x2AE3,
    name: "Chromatic Distance from Planckian",
    id: "org.bluetooth.characteristic.chromatic_distance_from_planckian",
  },
  {
    uuid: 0x2AE4,
    name: "Chromaticity Coordinates",
    id: "org.bluetooth.characteristic.chromaticity_coordinates",
  },
  {
    uuid: 0x2AE5,
    name: "Chromaticity in CCT and Duv Values",
    id: "org.bluetooth.characteristic.chromaticity_in_cct_and_duv_values",
  },
  {
    uuid: 0x2AE6,
    name: "Chromaticity Tolerance",
    id: "org.bluetooth.characteristic.chromaticity_tolerance",
  },
  {
    uuid: 0x2AE7,
    name: "CIE 13.3-1995 Color Rendering Index",
    id: "org.bluetooth.characteristic.cie_13_3_1995_color_rendering_index",
  },
  {
    uuid: 0x2AE8,
    name: "Coefficient",
    id: "org.bluetooth.characteristic.coefficient",
  },
  {
    uuid: 0x2AE9,
    name: "Correlated Color Temperature",
    id: "org.bluetooth.characteristic.correlated_color_temperature",
  },
  {
    uuid: 0x2AEA,
    name: "Count 16",
    id: "org.bluetooth.characteristic.count_16",
  },
  {
    uuid: 0x2AEB,
    name: "Count 24",
    id: "org.bluetooth.characteristic.count_24",
  },
  {
    uuid: 0x2AEC,
    name: "Country Code",
    id: "org.bluetooth.characteristic.country_code",
  },
  {
    uuid: 0x2AED,
    name: "Date UTC",
    id: "org.bluetooth.characteristic.date_utc",
  },
  {
    uuid: 0x2AEE,
    name: "Electric Current",
    id: "org.bluetooth.characteristic.electric_current",
  },
  {
    uuid: 0x2AEF,
    name: "Electric Current Range",
    id: "org.bluetooth.characteristic.electric_current_range",
  },
  {
    uuid: 0x2AF0,
    name: "Electric Current Specification",
    id: "org.bluetooth.characteristic.electric_current_specification",
  },
  {
    uuid: 0x2AF1,
    name: "Electric Current Statistics",
    id: "org.bluetooth.characteristic.electric_current_statistics",
  },
  {
    uuid: 0x2AF2,
    name: "Energy",
    id: "org.bluetooth.characteristic.energy",
  },
  {
    uuid: 0x2AF3,
    name: "Energy in a Period of Day",
    id: "org.bluetooth.characteristic.energy_in_a_period_of_day",
  },
  {
    uuid: 0x2AF4,
    name: "Event Statistics",
    id: "org.bluetooth.characteristic.event_statistics",
  },
  {
    uuid: 0x2AF5,
    name: "Fixed String 16",
    id: "org.bluetooth.characteristic.fixed_string_16",
  },
  {
    uuid: 0x2AF6,
    name: "Fixed String 24",
    id: "org.bluetooth.characteristic.fixed_string_24",
  },
  {
    uuid: 0x2AF7,
    name: "Fixed String 36",
    id: "org.bluetooth.characteristic.fixed_string_36",
  },
  {
    uuid: 0x2AF8,
    name: "Fixed String 8",
    id: "org.bluetooth.characteristic.fixed_string_8",
  },
  {
    uuid: 0x2AF9,
    name: "Generic Level",
    id: "org.bluetooth.characteristic.generic_level",
  },
  {
    uuid: 0x2AFA,
    name: "Global Trade Item Number",
    id: "org.bluetooth.characteristic.global_trade_item_number",
  },
  {
    uuid: 0x2AFB,
    name: "Illuminance",
    id: "org.bluetooth.characteristic.illuminance",
  },
  {
    uuid: 0x2AFC,
    name: "Luminous Efficacy",
    id: "org.bluetooth.characteristic.luminous_efficacy",
  },
  {
    uuid: 0x2AFD,
    name: "Luminous Energy",
    id: "org.bluetooth.characteristic.luminous_energy",
  },
  {
    uuid: 0x2AFE,
    name: "Luminous Exposure",
    id: "org.bluetooth.characteristic.luminous_exposure",
  },
  {
    uuid: 0x2AFF,
    name: "Luminous Flux",
    id: "org.bluetooth.characteristic.luminous_flux",
  },
  {
    uuid: 0x2B00,
    name: "Luminous Flux Range",
    id: "org.bluetooth.characteristic.luminous_flux_range",
  },
  {
    uuid: 0x2B01,
    name: "Luminous Intensity",
    id: "org.bluetooth.characteristic.luminous_intensity",
  },
  {
    uuid: 0x2B02,
    name: "Mass Flow",
    id: "org.bluetooth.characteristic.mass_flow",
  },
  {
    uuid: 0x2B03,
    name: "Perceived Lightness",
    id: "org.bluetooth.characteristic.perceived_lightness",
  },
  {
    uuid: 0x2B04,
    name: "Percentage 8",
    id: "org.bluetooth.characteristic.percentage_8",
  },
  {
    uuid: 0x2B05,
    name: "Power",
    id: "org.bluetooth.characteristic.power",
  },
  {
    uuid: 0x2B06,
    name: "Power Specification",
    id: "org.bluetooth.characteristic.power_specification",
  },
  {
    uuid: 0x2B07,
    name: "Relative Runtime in a Current Range",
    id: "org.bluetooth.characteristic.relative_runtime_in_a_current_range",
  },
  {
    uuid: 0x2B08,
    name: "Relative Runtime in a Generic Level Range",
    id: "org.bluetooth.characteristic.relative_runtime_in_a_generic_level_range",
  },
  {
    uuid: 0x2B09,
    name: "Relative Value in a Voltage Range",
    id: "org.bluetooth.characteristic.relative_value_in_a_voltage_range",
  },
  {
    uuid: 0x2B0A,
    name: "Relative Value in an Illuminance Range",
    id: "org.bluetooth.characteristic.relative_value_in_an_illuminance_range",
  },
  {
    uuid: 0x2B0B,
    name: "Relative Value in a Period of Day",
    id: "org.bluetooth.characteristic.relative_value_in_a_period_of_day",
  },
  {
    uuid: 0x2B0C,
    name: "Relative Value in a Temperature Range",
    id: "org.bluetooth.characteristic.relative_value_in_a_temperature_range",
  },
  {
    uuid: 0x2B0D,
    name: "Temperature 8",
    id: "org.bluetooth.characteristic.temperature_8",
  },
  {
    uuid: 0x2B0E,
    name: "Temperature 8 in a Period of Day",
    id: "org.bluetooth.characteristic.temperature_8_in_a_period_of_day",
  },
  {
    uuid: 0x2B0F,
    name: "Temperature 8 Statistics",
    id: "org.bluetooth.characteristic.temperature_8_statistics",
  },
  {
    uuid: 0x2B10,
    name: "Temperature Range",
    id: "org.bluetooth.characteristic.temperature_range",
  },
  {
    uuid: 0x2B11,
    name: "Temperature Statistics",
    id: "org.bluetooth.characteristic.temperature_statistics",
  },
  {
    uuid: 0x2B12,
    name: "Time Decihour 8",
    id: "org.bluetooth.characteristic.time_decihour_8",
  },
  {
    uuid: 0x2B13,
    name: "Time Exponential 8",
    id: "org.bluetooth.characteristic.time_exponential_8",
  },
  {
    uuid: 0x2B14,
    name: "Time Hour 24",
    id: "org.bluetooth.characteristic.time_hour_24",
  },
  {
    uuid: 0x2B15,
    name: "Time Millisecond 24",
    id: "org.bluetooth.characteristic.time_millisecond_24",
  },
  {
    uuid: 0x2B16,
    name: "Time Second 16",
    id: "org.bluetooth.characteristic.time_second_16",
  },
  {
    uuid: 0x2B17,
    name: "Time Second 8",
    id: "org.bluetooth.characteristic.time_second_8",
  },
  {
    uuid: 0x2B18,
    name: "Voltage",
    id: "org.bluetooth.characteristic.voltage",
  },
  {
    uuid: 0x2B19,
    name: "Voltage Specification",
    id: "org.bluetooth.characteristic.voltage_specification",
  },
  {
    uuid: 0x2B1A,
    name: "Voltage Statistics",
    id: "org.bluetooth.characteristic.voltage_statistics",
  },
  {
    uuid: 0x2B1B,
    name: "Volume Flow",
    id: "org.bluetooth.characteristic.volume_flow",
  },
  {
    uuid: 0x2B1C,
    name: "Chromaticity Coordinate",
    id: "org.bluetooth.characteristic.chromaticity_coordinate",
  },
  {
    uuid: 0x2B1D,
    name: "RC Feature",
    id: "org.bluetooth.characteristic.rc_feature",
  },
  {
    uuid: 0x2B1E,
    name: "RC Settings",
    id: "org.bluetooth.characteristic.rc_settings",
  },
  {
    uuid: 0x2B1F,
    name: "Reconnection Configuration Control Point",
    id: "org.bluetooth.characteristic.reconnection_configuration_control_point",
  },
  {
    uuid: 0x2B20,
    name: "IDD Status Changed",
    id: "org.bluetooth.characteristic.idd_status_changed",
  },
  {
    uuid: 0x2B21,
    name: "IDD Status",
    id: "org.bluetooth.characteristic.idd_status",
  },
  {
    uuid: 0x2B22,
    name: "IDD Annunciation Status",
    id: "org.bluetooth.characteristic.idd_annunciation_status",
  },
  {
    uuid: 0x2B23,
    name: "IDD Features",
    id: "org.bluetooth.characteristic.idd_features",
  },
  {
    uuid: 0x2B24,
    name: "IDD Status Reader Control Point",
    id: "org.bluetooth.characteristic.idd_status_reader_control_point",
  },
  {
    uuid: 0x2B25,
    name: "IDD Command Control Point",
    id: "org.bluetooth.characteristic.idd_command_control_point",
  },
  {
    uuid: 0x2B26,
    name: "IDD Command Data",
    id: "org.bluetooth.characteristic.idd_command_data",
  },
  {
    uuid: 0x2B27,
    name: "IDD Record Access Control Point",
    id: "org.bluetooth.characteristic.idd_record_access_control_point",
  },
  {
    uuid: 0x2B28,
    name: "IDD History Data",
    id: "org.bluetooth.characteristic.idd_history_data",
  },
  {
    uuid: 0x2B29,
    name: "Client Supported Features",
    id: "org.bluetooth.characteristic.client_supported_features",
  },
  {
    uuid: 0x2B2A,
    name: "Database Hash",
    id: "org.bluetooth.characteristic.database_hash",
  },
  {
    uuid: 0x2B2B,
    name: "BSS Control Point",
    id: "org.bluetooth.characteristic.bss_control_point",
  },
  {
    uuid: 0x2B2C,
    name: "BSS Response",
    id: "org.bluetooth.characteristic.bss_response",
  },
  {
    uuid: 0x2B2D,
    name: "Emergency ID",
    id: "org.bluetooth.characteristic.emergency_id",
  },
  {
    uuid: 0x2B2E,
    name: "Emergency Text",
    id: "org.bluetooth.characteristic.emergency_text",
  },
  {
    uuid: 0x2B2F,
    name: "ACS Status",
    id: "org.bluetooth.characteristic.acs_status",
  },
  {
    uuid: 0x2B30,
    name: "ACS Data In",
    id: "org.bluetooth.characteristic.acs_data_in",
  },
  {
    uuid: 0x2B31,
    name: "ACS Data Out Notify",
    id: "org.bluetooth.characteristic.acs_data_out_notify",
  },
  {
    uuid: 0x2B32,
    name: "ACS Data Out Indicate",
    id: "org.bluetooth.characteristic.acs_data_out_indicate",
  },
  {
    uuid: 0x2B33,
    name: "ACS Control Point",
    id: "org.bluetooth.characteristic.acs_control_point",
  },
  {
    uuid: 0x2B34,
    name: "Enhanced Blood Pressure Measurement",
    id: "org.bluetooth.characteristic.enhanced_blood_pressure_measurement",
  },
  {
    uuid: 0x2B35,
    name: "Enhanced Intermediate Cuff Pressure",
    id: "org.bluetooth.characteristic.enhanced_intermediate_cuff_pressure",
  },
  {
    uuid: 0x2B36,
    name: "Blood Pressure Record",
    id: "org.bluetooth.characteristic.blood_pressure_record",
  },
  {
    uuid: 0x2B37,
    name: "Registered User",
    id: "org.bluetooth.characteristic.registered_user",
  },
  {
    uuid: 0x2B38,
    name: "BR-EDR Handover Data",
    id: "org.bluetooth.characteristic.br_edr_handover_data",
  },
  {
    uuid: 0x2B39,
    name: "Bluetooth SIG Data",
    id: "org.bluetooth.characteristic.bluetooth_sig_data",
  },
  {
    uuid: 0x2B3A,
    name: "Server Supported Features",
    id: "org.bluetooth.characteristic.server_supported_features",
  },
  {
    uuid: 0x2B3B,
    name: "Physical Activity Monitor Features",
    id: "org.bluetooth.characteristic.physical_activity_monitor_features",
  },
  {
    uuid: 0x2B3C,
    name: "General Activity Instantaneous Data",
    id: "org.bluetooth.characteristic.general_activity_instantaneous_data",
  },
  {
    uuid: 0x2B3D,
    name: "General Activity Summary Data",
    id: "org.bluetooth.characteristic.general_activity_summary_data",
  },
  {
    uuid: 0x2B3E,
    name: "CardioRespiratory Activity Instantaneous Data",
    id: "org.bluetooth.characteristic.cardiorespiratory_activity_instantaneous_data",
  },
  {
    uuid: 0x2B3F,
    name: "CardioRespiratory Activity Summary Data",
    id: "org.bluetooth.characteristic.cardiorespiratory_activity_summary_data",
  },
  {
    uuid: 0x2B40,
    name: "Step Counter Activity Summary Data",
    id: "org.bluetooth.characteristic.step_counter_activity_summary_data",
  },
  {
    uuid: 0x2B41,
    name: "Sleep Activity Instantaneous Data",
    id: "org.bluetooth.characteristic.sleep_activity_instantaneous_data",
  },
  {
    uuid: 0x2B42,
    name: "Sleep Activity Summary Data",
    id: "org.bluetooth.characteristic.sleep_activity_summary_data",
  },
  {
    uuid: 0x2B43,
    name: "Physical Activity Monitor Control Point",
    id: "org.bluetooth.characteristic.physical_activity_monitor_control_point",
  },
  {
    uuid: 0x2B44,
    name: "Physical Activity Current Session",
    id: "org.bluetooth.characteristic.physical_activity_current_session",
  },
  {
    uuid: 0x2B45,
    name: "Physical Activity Session Descriptor",
    id: "org.bluetooth.characteristic.physical_activity_session_descriptor",
  },
  {
    uuid: 0x2B46,
    name: "Preferred Units",
    id: "org.bluetooth.characteristic.preferred_units",
  },
  {
    uuid: 0x2B47,
    name: "High Resolution Height",
    id: "org.bluetooth.characteristic.high_resolution_height",
  },
  {
    uuid: 0x2B48,
    name: "Middle Name",
    id: "org.bluetooth.characteristic.middle_name",
  },
  {
    uuid: 0x2B49,
    name: "Stride Length",
    id: "org.bluetooth.characteristic.stride_length",
  },
  {
    uuid: 0x2B4A,
    name: "Handedness",
    id: "org.bluetooth.characteristic.handedness",
  },
  {
    uuid: 0x2B4B,
    name: "Device Wearing Position",
    id: "org.bluetooth.characteristic.device_wearing_position",
  },
  {
    uuid: 0x2B4C,
    name: "Four Zone Heart Rate Limits",
    id: "org.bluetooth.characteristic.four_zone_heart_rate_limits",
  },
  {
    uuid: 0x2B4D,
    name: "High Intensity Exercise Threshold",
    id: "org.bluetooth.characteristic.high_intensity_exercise_threshold",
  },
  {
    uuid: 0x2B4E,
    name: "Activity Goal",
    id: "org.bluetooth.characteristic.activity_goal",
  },
  {
    uuid: 0x2B4F,
    name: "Sedentary Interval Notification",
    id: "org.bluetooth.characteristic.sedentary_interval_notification",
  },
  {
    uuid: 0x2B50,
    name: "Caloric Intake",
    id: "org.bluetooth.characteristic.caloric_intake",
  },
  {
    uuid: 0x2B51,
    name: "TMAP Role",
    id: "org.bluetooth.characteristic.tmap_role",
  },
  {
    uuid: 0x2B77,
    name: "Audio Input State",
    id: "org.bluetooth.characteristic.audio_input_state",
  },
  {
    uuid: 0x2B78,
    name: "Gain Settings Attribute",
    id: "org.bluetooth.characteristic.gain_settings_attribute",
  },
  {
    uuid: 0x2B79,
    name: "Audio Input Type",
    id: "org.bluetooth.characteristic.audio_input_type",
  },
  {
    uuid: 0x2B7A,
    name: "Audio Input Status",
    id: "org.bluetooth.characteristic.audio_input_status",
  },
  {
    uuid: 0x2B7B,
    name: "Audio Input Control Point",
    id: "org.bluetooth.characteristic.audio_input_control_point",
  },
  {
    uuid: 0x2B7C,
    name: "Audio Input Description",
    id: "org.bluetooth.characteristic.audio_input_description",
  },
  {
    uuid: 0x2B7D,
    name: "Volume State",
    id: "org.bluetooth.characteristic.volume_state",
  },
  {
    uuid: 0x2B7E,
    name: "Volume Control Point",
    id: "org.bluetooth.characteristic.volume_control_point",
  },
  {
    uuid: 0x2B7F,
    name: "Volume Flags",
    id: "org.bluetooth.characteristic.volume_flags",
  },
  {
    uuid: 0x2B80,
    name: "Volume Offset State",
    id: "org.bluetooth.characteristic.volume_offset_state",
  },
  {
    uuid: 0x2B81,
    name: "Audio Location",
    id: "org.bluetooth.characteristic.audio_location",
  },
  {
    uuid: 0x2B82,
    name: "Volume Offset Control Point",
    id: "org.bluetooth.characteristic.volume_offset_control_point",
  },
  {
    uuid: 0x2B83,
    name: "Audio Output Description",
    id: "org.bluetooth.characteristic.audio_output_description",
  },
  {
    uuid: 0x2B84,
    name: "Set Identity Resolving Key",
    id: "org.bluetooth.characteristic.set_identity_resolving_key",
  },
  {
    uuid: 0x2B85,
    name: "Coordinated Set Size",
    id: "org.bluetooth.characteristic.size_characteristic",
  },
  {
    uuid: 0x2B86,
    name: "Set Member Lock",
    id: "org.bluetooth.characteristic.lock_characteristic",
  },
  {
    uuid: 0x2B87,
    name: "Set Member Rank",
    id: "org.bluetooth.characteristic.rank_characteristic",
  },
  {
    uuid: 0x2B88,
    name: "Encrypted Data Key Material",
    id: "org.bluetooth.characteristic.encrypted_data_key_material",
  },
  {
    uuid: 0x2B89,
    name: "Apparent Energy 32",
    id: "org.bluetooth.characteristic.apparent_energy_32",
  },
  {
    uuid: 0x2B8A,
    name: "Apparent Power",
    id: "org.bluetooth.characteristic.apparent_power",
  },
  {
    uuid: 0x2B8B,
    name: "Live Health Observations",
    id: "org.bluetooth.characteristic.live_health_observations",
  },
  {
    uuid: 0x2B8C,
    name: "CO\\textsubscript{2} Concentration",
    id: "org.bluetooth.characteristic.co2_concentration",
  },
  {
    uuid: 0x2B8D,
    name: "Cosine of the Angle",
    id: "org.bluetooth.characteristic.cosine_of_the_angle",
  },
  {
    uuid: 0x2B8E,
    name: "Device Time Feature",
    id: "org.bluetooth.characteristic.device_time_feature",
  },
  {
    uuid: 0x2B8F,
    name: "Device Time Parameters",
    id: "org.bluetooth.characteristic.device_time_parameters",
  },
  {
    uuid: 0x2B90,
    name: "Device Time",
    id: "org.bluetooth.characteristic.device_time",
  },
  {
    uuid: 0x2B91,
    name: "Device Time Control Point",
    id: "org.bluetooth.characteristic.device_time_control_point",
  },
  {
    uuid: 0x2B92,
    name: "Time Change Log Data",
    id: "org.bluetooth.characteristic.time_change_log_data",
  },
  {
    uuid: 0x2B93,
    name: "Media Player Name",
    id: "org.bluetooth.characteristic.media_player_name",
  },
  {
    uuid: 0x2B94,
    name: "Media Player Icon Object ID",
    id: "org.bluetooth.characteristic.media_player_icon_object_id",
  },
  {
    uuid: 0x2B95,
    name: "Media Player Icon URL",
    id: "org.bluetooth.characteristic.media_player_icon_url",
  },
  {
    uuid: 0x2B96,
    name: "Track Changed",
    id: "org.bluetooth.characteristic.track_changed",
  },
  {
    uuid: 0x2B97,
    name: "Track Title",
    id: "org.bluetooth.characteristic.track_title",
  },
  {
    uuid: 0x2B98,
    name: "Track Duration",
    id: "org.bluetooth.characteristic.track_duration",
  },
  {
    uuid: 0x2B99,
    name: "Track Position",
    id: "org.bluetooth.characteristic.track_position",
  },
  {
    uuid: 0x2B9A,
    name: "Playback Speed",
    id: "org.bluetooth.characteristic.playback_speed",
  },
  {
    uuid: 0x2B9B,
    name: "Seeking Speed",
    id: "org.bluetooth.characteristic.seeking_speed",
  },
  {
    uuid: 0x2B9C,
    name: "Current Track Segments Object ID",
    id: "org.bluetooth.characteristic.current_track_segments_object_id",
  },
  {
    uuid: 0x2B9D,
    name: "Current Track Object ID",
    id: "org.bluetooth.characteristic.current_track_object_id",
  },
  {
    uuid: 0x2B9E,
    name: "Next Track Object ID",
    id: "org.bluetooth.characteristic.next_track_object_id",
  },
  {
    uuid: 0x2B9F,
    name: "Parent Group Object ID",
    id: "org.bluetooth.characteristic.parent_group_object_id",
  },
  {
    uuid: 0x2BA0,
    name: "Current Group Object ID",
    id: "org.bluetooth.characteristic.current_group_object_id",
  },
  {
    uuid: 0x2BA1,
    name: "Playing Order",
    id: "org.bluetooth.characteristic.playing_order",
  },
  {
    uuid: 0x2BA2,
    name: "Playing Orders Supported",
    id: "org.bluetooth.characteristic.playing_orders_supported",
  },
  {
    uuid: 0x2BA3,
    name: "Media State",
    id: "org.bluetooth.characteristic.media_state",
  },
  {
    uuid: 0x2BA4,
    name: "Media Control Point",
    id: "org.bluetooth.characteristic.media_control_point",
  },
  {
    uuid: 0x2BA5,
    name: "Media Control Point Opcodes Supported",
    id: "org.bluetooth.characteristic.media_control_point_opcodes_supported",
  },
  {
    uuid: 0x2BA6,
    name: "Search Results Object ID",
    id: "org.bluetooth.characteristic.search_results_object_id",
  },
  {
    uuid: 0x2BA7,
    name: "Search Control Point",
    id: "org.bluetooth.characteristic.search_control_point",
  },
  {
    uuid: 0x2BA8,
    name: "Energy 32",
    id: "org.bluetooth.characteristic.energy_32",
  },
  {
    uuid: 0x2BA9,
    name: "Media Player Icon Object Type",
    id: "org.bluetooth.characteristic.media_player_icon_object_type",
  },
  {
    uuid: 0x2BAA,
    name: "Track Segments Object Type",
    id: "org.bluetooth.characteristic.track_segments_object_type",
  },
  {
    uuid: 0x2BAB,
    name: "Track Object Type",
    id: "org.bluetooth.characteristic.track_object_type",
  },
  {
    uuid: 0x2BAC,
    name: "Group Object Type",
    id: "org.bluetooth.characteristic.group_object_type",
  },
  {
    uuid: 0x2BAD,
    name: "Constant Tone Extension Enable",
    id: "org.bluetooth.characteristic.constant_tone_extension_enable",
  },
  {
    uuid: 0x2BAE,
    name: "Advertising Constant Tone Extension Minimum Length",
    id: "org.bluetooth.characteristic.advertising_constant_tone_extension_minimum_length",
  },
  {
    uuid: 0x2BAF,
    name: "Advertising Constant Tone Extension Minimum Transmit Count",
    id: "org.bluetooth.characteristic.advertising_constant_tone_extension_minimum_transmit_count",
  },
  {
    uuid: 0x2BB0,
    name: "Advertising Constant Tone Extension Transmit Duration",
    id: "org.bluetooth.characteristic.advertising_constant_tone_extension_transmit_duration",
  },
  {
    uuid: 0x2BB1,
    name: "Advertising Constant Tone Extension Interval",
    id: "org.bluetooth.characteristic.advertising_constant_tone_extension_interval",
  },
  {
    uuid: 0x2BB2,
    name: "Advertising Constant Tone Extension PHY",
    id: "org.bluetooth.characteristic.advertising_constant_tone_extension_phy",
  },
  {
    uuid: 0x2BB3,
    name: "Bearer Provider Name",
    id: "org.bluetooth.characteristic.bearer_provider_name",
  },
  {
    uuid: 0x2BB4,
    name: "Bearer UCI",
    id: "org.bluetooth.characteristic.bearer_uci",
  },
  {
    uuid: 0x2BB5,
    name: "Bearer Technology",
    id: "org.bluetooth.characteristic.bearer_technology",
  },
  {
    uuid: 0x2BB6,
    name: "Bearer URI Schemes Supported List",
    id: "org.bluetooth.characteristic.bearer_uri_schemes_supported_list",
  },
  {
    uuid: 0x2BB7,
    name: "Bearer Signal Strength",
    id: "org.bluetooth.characteristic.bearer_signal_strength",
  },
  {
    uuid: 0x2BB8,
    name: "Bearer Signal Strength Reporting Interval",
    id: "org.bluetooth.characteristic.bearer_signal_strength_reporting_interval",
  },
  {
    uuid: 0x2BB9,
    name: "Bearer List Current Calls",
    id: "org.bluetooth.characteristic.bearer_list_current_calls",
  },
  {
    uuid: 0x2BBA,
    name: "Content Control ID",
    id: "org.bluetooth.characteristic.content_control_id",
  },
  {
    uuid: 0x2BBB,
    name: "Status Flags",
    id: "org.bluetooth.characteristic.status_flags",
  },
  {
    uuid: 0x2BBC,
    name: "Incoming Call Target Bearer URI",
    id: "org.bluetooth.characteristic.incoming_call_target_bearer_uri",
  },
  {
    uuid: 0x2BBD,
    name: "Call State",
    id: "org.bluetooth.characteristic.call_state",
  },
  {
    uuid: 0x2BBE,
    name: "Call Control Point",
    id: "org.bluetooth.characteristic.call_control_point",
  },
  {
    uuid: 0x2BBF,
    name: "Call Control Point Optional Opcodes",
    id: "org.bluetooth.characteristic.call_control_point_optional_opcodes",
  },
  {
    uuid: 0x2BC0,
    name: "Termination Reason",
    id: "org.bluetooth.characteristic.termination_reason",
  },
  {
    uuid: 0x2BC1,
    name: "Incoming Call",
    id: "org.bluetooth.characteristic.incoming_call",
  },
  {
    uuid: 0x2BC2,
    name: "Call Friendly Name",
    id: "org.bluetooth.characteristic.call_friendly_name",
  },
  {
    uuid: 0x2BC3,
    name: "Mute",
    id: "org.bluetooth.characteristic.mute",
  },
  {
    uuid: 0x2BC4,
    name: "Sink ASE",
    id: "org.bluetooth.characteristic.sink_ase",
  },
  {
    uuid: 0x2BC5,
    name: "Source ASE",
    id: "org.bluetooth.characteristic.source_ase",
  },
  {
    uuid: 0x2BC6,
    name: "ASE Control Point",
    id: "org.bluetooth.characteristic.ase_control_point",
  },
  {
    uuid: 0x2BC7,
    name: "Broadcast Audio Scan Control Point",
    id: "org.bluetooth.characteristic.broadcast_audio_scan_control_point",
  },
  {
    uuid: 0x2BC8,
    name: "Broadcast Receive State",
    id: "org.bluetooth.characteristic.broadcast_receive_state",
  },
  {
    uuid: 0x2BC9,
    name: "Sink PAC",
    id: "org.bluetooth.characteristic.sink_pac",
  },
  {
    uuid: 0x2BCA,
    name: "Sink Audio Locations",
    id: "org.bluetooth.characteristic.sink_audio_locations",
  },
  {
    uuid: 0x2BCB,
    name: "Source PAC",
    id: "org.bluetooth.characteristic.source_pac",
  },
  {
    uuid: 0x2BCC,
    name: "Source Audio Locations",
    id: "org.bluetooth.characteristic.source_audio_locations",
  },
  {
    uuid: 0x2BCD,
    name: "Available Audio Contexts",
    id: "org.bluetooth.characteristic.available_audio_contexts",
  },
  {
    uuid: 0x2BCE,
    name: "Supported Audio Contexts",
    id: "org.bluetooth.characteristic.supported_audio_contexts",
  },
  {
    uuid: 0x2BCF,
    name: "Ammonia Concentration",
    id: "org.bluetooth.characteristic.ammonia_concentration",
  },
  {
    uuid: 0x2BD0,
    name: "Carbon Monoxide Concentration",
    id: "org.bluetooth.characteristic.carbon_monoxide_concentration",
  },
  {
    uuid: 0x2BD1,
    name: "Methane Concentration",
    id: "org.bluetooth.characteristic.methane_concentration",
  },
  {
    uuid: 0x2BD2,
    name: "Nitrogen Dioxide Concentration",
    id: "org.bluetooth.characteristic.nitrogen_dioxide_concentration",
  },
  {
    uuid: 0x2BD3,
    name: "Non-Methane Volatile Organic Compounds Concentration",
    id: "org.bluetooth.characteristic.non-methane_volatile_organic_compounds_concentration",
  },
  {
    uuid: 0x2BD4,
    name: "Ozone Concentration",
    id: "org.bluetooth.characteristic.ozone_concentration",
  },
  {
    uuid: 0x2BD5,
    name: "Particulate Matter - PM1 Concentration",
    id: "org.bluetooth.characteristic.particulate_matter_pm1_concentration",
  },
  {
    uuid: 0x2BD6,
    name: "Particulate Matter - PM2.5 Concentration",
    id: "org.bluetooth.characteristic.particulate_matter_pm2_5_concentration",
  },
  {
    uuid: 0x2BD7,
    name: "Particulate Matter - PM10 Concentration",
    id: "org.bluetooth.characteristic.particulate_matter_pm10_concentration",
  },
  {
    uuid: 0x2BD8,
    name: "Sulfur Dioxide Concentration",
    id: "org.bluetooth.characteristic.sulfur_dioxide_concentration",
  },
  {
    uuid: 0x2BD9,
    name: "Sulfur Hexafluoride Concentration",
    id: "org.bluetooth.characteristic.sulfur_hexafluoride_concentration",
  },
  {
    uuid: 0x2BDA,
    name: "Hearing Aid Features",
    id: "org.bluetooth.characteristic.hearing_aid_features",
  },
  {
    uuid: 0x2BDB,
    name: "Hearing Aid Preset Control Point",
    id: "org.bluetooth.characteristic.hearing_aid_preset_control_point",
  },
  {
    uuid: 0x2BDC,
    name: "Active Preset Index",
    id: "org.bluetooth.characteristic.active_preset_index",
  },
  {
    uuid: 0x2BDD,
    name: "Stored Health Observations",
    id: "org.bluetooth.characteristic.stored_health_observations",
  },
  {
    uuid: 0x2BDE,
    name: "Fixed String 64",
    id: "org.bluetooth.characteristic.fixed_string_64",
  },
  {
    uuid: 0x2BDF,
    name: "High Temperature",
    id: "org.bluetooth.characteristic.high_temperature",
  },
  {
    uuid: 0x2BE0,
    name: "High Voltage",
    id: "org.bluetooth.characteristic.high_voltage",
  },
  {
    uuid: 0x2BE1,
    name: "Light Distribution",
    id: "org.bluetooth.characteristic.light_distribution",
  },
  {
    uuid: 0x2BE2,
    name: "Light Output",
    id: "org.bluetooth.characteristic.light_output",
  },
  {
    uuid: 0x2BE3,
    name: "Light Source Type",
    id: "org.bluetooth.characteristic.light_source_type",
  },
  {
    uuid: 0x2BE4,
    name: "Noise",
    id: "org.bluetooth.characteristic.noise",
  },
  {
    uuid: 0x2BE5,
    name: "Relative Runtime in a Correlated Color Temperature Range",
    id: "org.bluetooth.characteristic.relative_runtime_in_a_correlated_color_temperature_range",
  },
  {
    uuid: 0x2BE6,
    name: "Time Second 32",
    id: "org.bluetooth.characteristic.time_second_32",
  },
  {
    uuid: 0x2BE7,
    name: "VOC Concentration",
    id: "org.bluetooth.characteristic.voc_concentration",
  },
  {
    uuid: 0x2BE8,
    name: "Voltage Frequency",
    id: "org.bluetooth.characteristic.voltage_frequency",
  },
  {
    uuid: 0x2BE9,
    name: "Battery Critical Status",
    id: "org.bluetooth.characteristic.battery_critical_status",
  },
  {
    uuid: 0x2BEA,
    name: "Battery Health Status",
    id: "org.bluetooth.characteristic.battery_health_status",
  },
  {
    uuid: 0x2BEB,
    name: "Battery Health Information",
    id: "org.bluetooth.characteristic.battery_health_information",
  },
  {
    uuid: 0x2BEC,
    name: "Battery Information",
    id: "org.bluetooth.characteristic.battery_information",
  },
  {
    uuid: 0x2BED,
    name: "Battery Level Status",
    id: "org.bluetooth.characteristic.battery_level_status",
  },
  {
    uuid: 0x2BEE,
    name: "Battery Time Status",
    id: "org.bluetooth.characteristic.battery_time_status",
  },
  {
    uuid: 0x2BEF,
    name: "Estimated Service Date",
    id: "org.bluetooth.characteristic.estimated_service_date",
  },
  {
    uuid: 0x2BF0,
    name: "Battery Energy Status",
    id: "org.bluetooth.characteristic.battery_energy_status",
  },
  {
    uuid: 0x2BF1,
    name: "Observation Schedule Changed",
    id: "org.bluetooth.characteristic.observation_schedule_changed",
  },
  {
    uuid: 0x2BF2,
    name: "Current Elapsed Time",
    id: "org.bluetooth.characteristic.current_elapsed_time",
  },
  {
    uuid: 0x2BF3,
    name: "Health Sensor Features",
    id: "org.bluetooth.characteristic.health_sensor_features",
  },
  {
    uuid: 0x2BF4,
    name: "GHS Control Point",
    id: "org.bluetooth.characteristic.ghs_control_point",
  },
  {
    uuid: 0x2BF5,
    name: "LE GATT Security Levels",
    id: "org.bluetooth.characteristic.le_gatt_security_levels",
  },
  {
    uuid: 0x2BF6,
    name: "ESL Address",
    id: "org.bluetooth.characteristic.esl_address",
  },
  {
    uuid: 0x2BF7,
    name: "AP Sync Key Material",
    id: "org.bluetooth.characteristic.ap_sync_key_material",
  },
  {
    uuid: 0x2BF8,
    name: "ESL Response Key Material",
    id: "org.bluetooth.characteristic.esl_response_key_material",
  },
  {
    uuid: 0x2BF9,
    name: "ESL Current Absolute Time",
    id: "org.bluetooth.characteristic.esl_current_absolute_time",
  },
  {
    uuid: 0x2BFA,
    name: "ESL Display Information",
    id: "org.bluetooth.characteristic.esl_display_information",
  },
  {
    uuid: 0x2BFB,
    name: "ESL Image Information",
    id: "org.bluetooth.characteristic.esl_image_information",
  },
  {
    uuid: 0x2BFC,
    name: "ESL Sensor Information",
    id: "org.bluetooth.characteristic.esl_sensor_information",
  },
  {
    uuid: 0x2BFD,
    name: "ESL LED Information",
    id: "org.bluetooth.characteristic.esl_led_information",
  },
  {
    uuid: 0x2BFE,
    name: "ESL Control Point",
    id: "org.bluetooth.characteristic.esl_control_point",
  },
  {
    uuid: 0x2BFF,
    name: "UDI for Medical Devices",
    id: "org.bluetooth.characteristic.medical_devices",
  },
  {
    uuid: 0x2C00,
    name: "GMAP Role",
    id: "org.bluetooth.characteristic.gmap_role",
  },
  {
    uuid: 0x2C01,
    name: "UGG Features",
    id: "org.bluetooth.characteristic.ugg_features",
  },
  {
    uuid: 0x2C02,
    name: "UGT Features",
    id: "org.bluetooth.characteristic.ugt_features",
  },
  {
    uuid: 0x2C03,
    name: "BGS Features",
    id: "org.bluetooth.characteristic.bgs_features",
  },
  {
    uuid: 0x2C04,
    name: "BGR Features",
    id: "org.bluetooth.characteristic.bgr_features",
  },
];
const mapCharacteristicUUIDs = new Map();
for (const uuid of characteristicUUIDs) {
  mapCharacteristicUUIDs.set(uuid.uuid, uuid);
}

async function start( [ evtWindow ] ) {
  try {
    if (!(navigator.bluetooth)) {
      throw "Bluetooth not supported";
    }
    if (!(navigator.bluetooth.getAvailability())) {
      throw "Bluetooth not available";
    }
    const btnStart = document.createElement("button");
    document.body.appendChild(btnStart);
    btnStart.appendChild(document.createTextNode("Click Here to Start"));
    btnStart.addEventListener("click", function (evt) {
      // Open the bluetooth device chooser for the user. Promise resolves when user slects and pairs a device.
      const promiseDevice = navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
      });
      promiseDevice.then(main);
    });
    async function main(bluetooth) {
      const pName = document.createElement("p");
      document.body.appendChild(pName);
      pName.appendChild(document.createTextNode("Name: " + bluetooth.name));
      const pId = document.createElement("p");
      document.body.appendChild(pId);
      pId.appendChild(document.createTextNode("ID: " + bluetooth.id));
      let idBinary = "";
      for (const byte of atob(bluetooth.id)) {
        idBinary += ":" + byte.charCodeAt(0).toString(16).padStart(2, "0");
      }
      const pIdBinary = document.createElement("p");
      document.body.appendChild(pIdBinary);
      pIdBinary.appendChild(document.createTextNode("ID (Binary): " + idBinary));
      const connectedBluetooth = await bluetooth.gatt.connect();
      for (const serviceUUID of mapServiceUUIDs.keys()) {
        const services = await connectedBluetooth.getPrimaryServices(serviceUUID);
        for (const service of services) {
          document.body.appendChild(await showService(service));
        }
      }
      async function showService(service) {
        const div = document.createElement("div");
        div.style.border = "1px solid black";
        const entry = mapServiceUUIDs.get(service.uuid);
        div.appendChild(document.createTextNode("Name: " + entry.name));
        div.appendChild(document.createTextNode("ID: " + entry.id));
        div.appendChild(document.createTextNode("isPrimary: " + service.isPrimary));
        for (const characteristicUUID of mapCharacteristicUUIDs.keys()) {
          const characteristics = service.getCharacteristics(characteristicsUUID);
          for (const characteristic of characteristics) {
            document.body.appendChild(await showCharacteristic(characteristic));
          }
        }
        return div;
      }
      async function showCharacteristic(characteristic) {
        const div = document.createElement("div");
        div.style.border = "1px solid black";
        const entry = mapCharacteristicUUIDs.get(characteristic.uuid);
        div.appendChild(document.createTextNode("Name: " + entry.name));
        div.appendChild(document.createTextNode("ID: " + entry.id));
        /*
        const descriptors = characteristic.getDescriptors(descriptorUUID);
        for (const descriptor of descriptors) {
          descriptor.value;
          await descriptor.readValue();
          await descriptor.writeValue();
        }
        */
        const btnReadValue = document.createElement("button");
        div.appendChild(btnReadValue);
        btnReadValue.appendChild(document.createTextNode("Read Value"));
        const btnStartNotifications = document.createElement("button");
        div.appendChild(btnStartNotifications);
        btnStartNotifications.appendChild(document.createTextNode("Start Notifications"));
        const btnStopNotifications = document.createElement("button");
        div.appendChild(btnStopNotifications);
        btnStopNotifications.appendChild(document.createTextNode("Stop Notifications"));
        const btnWriteValueWithoutResponse = document.createElement("button");
        div.appendChild(btnWriteValueWithoutResponse);
        btnWriteValueWithoutResponse.appendChild(document.createTextNode("Write Value Without Response"));
        const btnWriteValueWithRepsonse = document.createElement("button");
        div.appendChild(btnWriteValueWithRepsonse);
        btnWriteValueWithRepsonse.appendChild(document.createTextNode("Write Value With Repsonse"));
        
        btnReadValue.addEventListener("click", function (evt) {
          characteristic.readValue();
        });
        btnStartNotifications.addEventListener("click", function (evt) {
          characteristic.startNotifications();
        });
        btnStopNotifications.addEventListener("click", function (evt) {
          characteristic.stopNotifications();
        });
        btnWriteValueWithResponse.addEventListener("click", function (evt) {
          characteristic.writeValueWithoutResponse();
        });
        btnWriteValueWithoutResponse.addEventListener("click", function (evt) {
          characteristic.writeValueWithResponse();
        });
        const properties = characteristic.properties;
        const divAuthenticatedSignedWrites = document.createElement("div");
        divAuthenticatedSignedWrites.style.backgroundColor = properties.authenticatedSignedWrites ? "green" : "red";
        const divBroadcast = document.createElement("div");
        divBroadcast.style.backgroundColor = properties.broadcast ? "green" : "red";
        const divIndicate = document.createElement("div");
        divBroadcast.style.backgroundColor = properties.indicate ? "green" : "red";
        const divNotify = document.createElement("div");
        divBroadcast.style.backgroundColor = properties.notify ? "green" : "red";
        const divRead = document.createElement("div");
        divBroadcast.style.backgroundColor = properties.read ? "green" : "red";
        const divReliableWrite = document.createElement("div");
        divBroadcast.style.backgroundColor = properties.reliableWrite ? "green" : "red";
        const divWritableAuxiliaries = document.createElement("div");
        divBroadcast.style.backgroundColor = properties.writableAuxiliaries ? "green" : "red";
        const divWrite = document.createElement("div");
        divBroadcast.style.backgroundColor = properties.write ? "green" : "red";
        const divWriteWithoutResponse = document.createElement("div");
        divBroadcast.style.backgroundColor = properties.writeWithoutResponse ? "green" : "red";
        
        return div;
      }
    }
  } catch (e) {
    console.log(e);
  }
}
