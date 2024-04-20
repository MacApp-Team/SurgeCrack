let bodyString = $response.body;
let body = JSON.parse(bodyString);
body.data.nickname = "🇨🇳 MacApp Team 🇨🇳";
body.data.current_device.trial_end_at = 1742436947;
body.data.current_device.trial_status = 1;
body = JSON.stringify(body);
$done({ body });
