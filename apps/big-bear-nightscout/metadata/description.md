# Nightscout

This acts as a web-based CGM (Continuous Glucose Monitor) to allow multiple caregivers to remotely view a patient's glucose data in real time. The server reads a MongoDB which is intended to be data from a physical CGM, where it sends new SGV (sensor glucose values) as the data becomes available. The data is then displayed graphically and blood glucose values are predicted 0.5 hours ahead using an autoregressive second order model. Alarms are generated for high and low values, which can be cleared by any watcher of the data.

# Video
