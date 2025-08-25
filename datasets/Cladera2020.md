---
{
    "name": "Cladera2020",
    "aliases": [],
    "year": 2020,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Samsung DVS"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Pedestrian Detection"
    ],
    "description": "Pedestrian detection",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Dataset is described in the paper but there is no mention of availability",
        "dataset_links": []
    },
    "paper": {
        "title": "On-Device Event Filtering with Binary Neural Networks for Pedestrian Detection Using Neuromorphic Vision Sensors",
        "doi": "10.1109/ICIP40778.2020.9191148",
        "authors": [
            "Fernando Cladera",
            "Anthony Bisulco",
            "Daniel Kepple",
            "Volkan Isler",
            "Daniel D. Lee"
        ],
        "abstract": "In this work, we present a hardware-efficient architecture for pedestrian detection with neuromorphic Dynamic Vision Sensors (DVSs), asynchronous camera sensors that report discrete changes in light intensity. These imaging sensors have many advantages compared to traditional frame-based cameras, such as increased dynamic range, lower bandwidth requirements, and higher sampling frequency with lower power consumption. Our architecture is composed of two main components: an event filtering stage to denoise the input image stream followed by a low-complexity neural network. For the first stage, we use a novel point-process filter (PPF) with an adaptive temporal windowing scheme that enhances classification accuracy. The second stage implements a hardware-efficient Binary Neural Network (BNN) for classification. To demonstrate the reduction in complexity achieved by our architecture, we showcase a Field-Programmable Gate Array (FPGA) implementation of the entire system which obtains a 86& reduction in latency compared to current neural network floating-point architectures.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 18,
            "updated": "2025-06-02T14:52:39.411747"
        },
        {
            "source": "scholar",
            "count": 34,
            "updated": "2025-06-02T14:52:38.566455"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9191148"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "sensor_resolution": "480 x 320",
        "num_recordings": "273"
    },
    "bibtex": {
        "pages": "3084--3088",
        "year": 2020,
        "month": "oct",
        "author": "Cladera, Fernando and Bisulco, Anthony and Kepple, Daniel and Isler, Volkan and Lee, Daniel D.",
        "publisher": "IEEE",
        "booktitle": "2020 {IEEE} {International} {Conference} on {Image} {Processing} ({ICIP})",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.1109/ICIP40778.2020.9191148",
        "url": "https://ieeexplore.ieee.org/document/9191148/",
        "isbn": "978-1-72816-395-6",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "On-{Device} {Event} {Filtering} with {Binary} {Neural} {Networks} for {Pedestrian} {Detection} {Using} {Neuromorphic} {Vision} {Sensors}",
        "address": "Abu Dhabi, United Arab Emirates",
        "type": "inproceedings",
        "key": "Cladera2020"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TCAD.2017.2682138",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2019.8802610",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCAD.2018.2857019",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2019.8803079",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3203217.3204463",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3020078.3021744",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TVLSI.2018.2815603",
            "source": "crossref"
        },
        {
            "doi": "10.3390/electronics8030281",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC.2017.7870263",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46493-0_32",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2017.2785272",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2013.71",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/BioCAS.2014.6981783",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.141",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8793924",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2016.7477561",
            "source": "crossref"
        },
        {
            "title": "Binarized neural networks: Training neural networks with weights and activations constrained to +1 or -1",
            "source": "crossref"
        },
        {
            "title": "Adaptive Temporal Pooling for Object Detection using Dynamic Vision Sensor",
            "source": "crossref"
        },
        {
            "title": "Event-based Vision: A Survey",
            "source": "crossref"
        },
        {
            "title": "Dynamic Vision Sensor integration on FPGA-based CNN accelerators for high-speed visual classification",
            "source": "crossref"
        },
        {
            "title": "Deep Learning with Energy-efficient Binary Gradient Cameras",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Recorded with a Samsung DVS with a resolution of 480 x 320 pixels
- Contains 273 recordings of pedestrians and 548 clips of non-pedestrian recordings
