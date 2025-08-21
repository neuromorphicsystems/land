---
{
    "name": "x-Rage",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Gesture Recognition",
        "First-person",
        "Sign Language"
    ],
    "description": "Egocentric gesture dataset",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Dataset is listed as coming soon. Page also says to contact the authors for access to the data",
        "dataset_links": []
    },
    "paper": {
        "title": "x-RAGE: eXtended Reality -- Action & Gesture Events Dataset",
        "doi": "10.48550/arXiv.2410.19486",
        "authors": [
            "Vivek Parmar",
            "Dwijay Bane",
            "Syed Shakib Sarwar",
            "Kleber Stangherlin",
            "Barbara De Salvo",
            "Manan Suri"
        ],
        "abstract": "With the emergence of the Metaverse and focus on wearable devices in the recent years gesture based human-computer interaction has gained significance. To enable gesture recognition for VR/AR headsets and glasses several datasets focusing on egocentric i.e. first-person view have emerged in recent years. However, standard frame-based vision suffers from limitations in data bandwidth requirements as well as ability to capture fast motions. To overcome these limitation bio-inspired approaches such as event-based cameras present an attractive alternative. In this work, we present the first event-camera based egocentric gesture dataset for enabling neuromorphic, low-power solutions for XR-centric gesture recognition. The dataset has been made available publicly at the following URL: https://gitlab.com/NVM_IITD_Research/xrage.",
        "open_access": false
    },
    "citation_counts": [],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2410.19486"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2410.19486v2"
        },
        {
            "type": "project_page",
            "url": "https://gitlab.com/NVM_IITD_Research/xrage"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "36",
        "num_subjects": "6",
        "num_recordings": "8064",
        "sensor_resolution": "1280x720",
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition, Computer Science - Emerging Technologies",
        "note": "arXiv:2410.19486 [cs]",
        "year": 2024,
        "month": "oct",
        "author": "Parmar, Vivek and Bane, Dwijay and Sarwar, Syed Shakib and Stangherlin, Kleber and Salvo, Barbara De and Suri, Manan",
        "publisher": "arXiv",
        "urldate": "2024-12-04",
        "language": "en",
        "doi": "10.48550/arXiv.2410.19486",
        "url": "http://arxiv.org/abs/2410.19486",
        "shorttitle": "x-{RAGE}",
        "title": "x-{RAGE}: {eXtended} {Reality} -- {Action} \\& {Gesture} {Events} {Dataset}",
        "type": "misc",
        "key": "parmar_x-rage_2024"
    }
}
---

### Dataset Structure

- 36 unique gestures with its variations.
- Recorded by 6 subjects in 6 different scenarios.
- Recorded in 3 states (sitting, standing, walking).
- Recorded 8064 samples in total.
- Recorded with EVK4 at 1280x720 pixels resolution.

| Action Category                      | Gesture                                              | Action                | Available with Both Hands |
| ------------------------------------ | ---------------------------------------------------- | --------------------- | ------------------------- |
| Move                                 | pinch drag to top and release                        | Move Top/Forward      | 2, 32                     |
| Move                                 | pinch drag to right and release                      | Move Right            | 3, 33                     |
| Move                                 | pinch drag to bottom and release                     | Move Bottom/Backward  | 4, 34                     |
| Move                                 | pinch drag to left and release                       | Move Left             | 5, 35                     |
| Move                                 | Fist drag to top and release                         | Move Top/Forward      | 7, 37                     |
| Move                                 | Fist drag to right and release                       | Move Right            | 8, 38                     |
| Move                                 | Fist drag to bottom and release                      | Move Bottom/Backward  | 9, 39                     |
| Move                                 | Fist drag to left and release                        | Move Left             | 10, 40                    |
| Open/Close                           | index pinch & open palm                              | Select                | 1, 31                     |
| Open/Close                           | relax palm to fist                                   | Select                | 6, 36                     |
| Zoom                                 | Zoom in Pinch opening with thumb and index           | Zoom in               | 18, 45                    |
| Zoom                                 | Zoom out Pinch Closing with thumb and index          | Zoom out              | 19, 46                    |
| Zoom                                 | left and right hand fist going apart                 | Zoom in               | 20                        |
| Zoom                                 | left and right hand fist coming close                | Zoom out              | 21                        |
| Rotate                               | Rotating right on a pinch knob with thumb and index  | Clockwise Rotate      | 25, 47                    |
| Rotate                               | Rotating left on a pinch knob with thumb and index   | Anti-Clockwise Rotate | 26, 48                    |
| Rotate                               | Rotating right on a bottle cap with thumb and index  | Clockwise Rotate      | 27, 49                    |
| Rotate                               | Rotating left on a bottle cap with thumb and index   | Anti-Clockwise Rotate | 28, 50                    |
| Rotate                               | Rotating right on a small screw with thumb and index | Clockwise Rotate      | 29, 51                    |
| Rotate                               | Rotating left on a small screw with thumb and index  | Anti-Clockwise Rotate | 30, 52                    |
| Accept / Decline                     | Air Draw Tick                                        | Correct / Accept      | 11, 41                    |
| Accept / Decline                     | Two index finger in cross overlap                    | Incorrect / Decline   | 12                        |
| Accept / Decline                     | Thumbs Up                                            | Like / Accept         | 13, 42                    |
| Accept / Decline                     | Thumbs Down                                          | Dislike / Decline     | 14, 43                    |
| Accept / Decline                     | Okay gesture                                         | Okay / Accept         | 15, 44                    |
| Halt / Stop                          | Timeout gesture                                      | Pause                 | 16                        |
| Halt / Stop                          | Two hands palm open up                               | Pause                 | 17                        |
| Steer Rotate                         | Steer right with left and right fist                 | Clockwise Rotate      | 22                        |
| Steer Rotate                         | Steer left with left and right fist                  | Anti-Clockwise Rotate | 23                        |
| Take a Photo                         | Making photo frame with both hands                   | Screenshot            | 24                        |
| Sweeping left                        | Sweeping left                                        | Move Left             | 53, 55                    |
| Sweeping right                       | Sweeping right                                       | Move Right            | 54, 56                    |
| Sweeping up                          | Sweeping up                                          | Move Top/Forward      | 57, 59                    |
| Sweeping down                        | Sweeping down                                        | Move Bottom/Backward  | 58, 60                    |
| All fingers apex closing             | All fingers apex closing                             | Select                | 61, 62                    |
| Hand waving gesture of greeting "Hi" | Hand waving gesture of greeting "Hi"                 | Home                  | 63, 64                    |
