---
{
    "name": "Kancharla2022",
    "aliases": [],
    "year": 2022.0,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "ESIM"
    ],
    "other_sensors": [
        "Vicon"
    ],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "Velocity Prediction"
    ],
    "description": "Event-Based Velocity Prediction",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Zenodo"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Zenodo",
                "url": "https://zenodo.org/records/6762053",
                "format": "CSV",
                "doi": "10.5281/zenodo.6762053",
                "available": true
            }
        ],
        "size_gb": 23.4,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-Based Velocity Prediction with Spiking Neural Networks",
        "doi": "",
        "authors": [
            "Shilpa Kancharla"
        ],
        "abstract": "Current deep learning networks in the present generation of artificial intelligence take a significant amount of power to run, thus limiting their feasibility for many long-term, low-power applications. An emerging type of neural network, known as spiking neural networks (SNN), optimizes the size, weight, and power (SWaP) when run. SNNs can be run on low-power embedded systems known as neuromorphic processors. In this work, I explore the feasibility of using an SNN in a regression application to predict the velocity of an object moving in frame. Neuromorphic computing uses very-large-scale integration (VLSI) systems containing electrical analogs to neurobiological structures. The Python framework snnTorch, a derivative of the deep learning framework PyTorch, is used to create a spiking neural network (SNN) that is applied to a novel event-based dataset generated with the event camera simulator, ESIM. Vicon motion tracking data provides the position and timestamps recorded of the moving entities, from which the ground truth velocity measurements and times are generated.The SNNs developed in this work regress the velocity vector, consisting of the x, y, and zcomponents, while using the event data as the input features, or the list of events associated with each velocity measurement. I seek to understand if SNNs can be used to predict velocities of moving entities from event camera data to form a low-power solution. With the use of the novel dataset created, three spiking convolutional neural network models were trained while the model that minimized the loss was further validated by omitting a subset of data used in the original training. My results show that of the three SNNs run, a spiking convolutional neural network with six spiking neurons that had the lowest RMSE compared to the ground truth velocity. This work shows that it is possible to train an SNN on event data and the associated velocity measurements in order to predict the velocity.",
        "open_access": false
    },
    "citation_counts": [],
    "links": [
        {
            "type": "paper",
            "url": "https://www.proquest.com/docview/2734696924"
        },
        {
            "type": "github_page",
            "url": "https://github.com/shilpakancharla/event-based-velocity-prediction-snn"
        }
    ],
    "full_name": "",
    "additional_metadata": {}
}
---

# Dataset Description

This dataset is intended to be used to predict the velocity based on the event pixels present in the data, given in (t, x, y, p) format alongside a ground truth velocity reading. A novel dataset using people and various objects moving in front of an RGB video camera was created. The positions of each entity and the associated times were captured with a Vicon motion tracking system. These two types of data were calibrated so that the movement in the video matched the measurements recorded by the Vicon system. The types of data collected include two different people carrying a calibrated Vicon Active Wand and moving around the room, a Lambda aerial robot with motion tracking markers that flew around the room, a box with motion tracking markers that were tossed back and forth in the air, and the same box was slid across the floor. The video recording was simulated as event camera data. Each pixel changes state independently of all the other pixels.

Source: Zenodo 