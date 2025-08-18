---
{
    "name": "Face Detection Dataset",
    "aliases": [],
    "year": 2020,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "ATIS"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Face Detection",
        "Blink Detection"
    ],
    "task": "Face Detection / Eye Blink detection",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [
            "Event Stream"
        ],
        "availability_comment": "",
        "dataset_links": [],
        "size_gb": 1.8,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-Based Face Detection and Tracking Using the Dynamics of Eye Blinks",
        "doi": "10.3389/fnins.2020.00587",
        "authors": [
            "Gregor Lenz",
            "Sio-Hoi Ieng",
            "Ryad Benosman"
        ],
        "abstract": "We present the \ufb01rst purely event-based method for face detection using the high temporal resolution properties of an event-based camera to detect the presence of a face in a scene using eye blinks. Eye blinks are a unique and stable natural dynamic temporal signature of human faces across population that can be fully captured by event-based sensors. We show that eye blinks have a unique temporal signature over time that can be easily detected by correlating the acquired local activity with a generic temporal model of eye blinks that has been generated from a wide population of users. In a second stage once a face has been located it becomes possible to apply a probabilistic framework to track its spatial location for each incoming event while using eye blinks to correct for drift and tracking errors. Results are shown for several indoor and outdoor experiments. We also release an annotated data set that can be used for future work on the topic.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 38,
            "updated": "2025-06-15T11:03:08.843532"
        },
        {
            "source": "scholar",
            "count": 57,
            "updated": "2025-06-15T11:03:08.701290"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2020.00587/full"
        },
        {
            "type": "project_page",
            "url": "Link broken"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "48",
        "num_subjects": "10",
        "num_blinks": "248",
        "recording_methodology": "static camera",
        "size_uncompressed": "1.8 Gb",
        "file_format": "EventStream",
        "event_format": "(x, y, t, p)",
        "polarity_range": "(0, 1)",
        "time_resolution": "us",
        "stereo": false
    },
    "bibtex": {
        "pages": "587",
        "year": 2020,
        "month": "jul",
        "author": "Lenz, Gregor and Ieng, Sio-Hoi and Benosman, Ryad",
        "journal": "Frontiers in Neuroscience",
        "urldate": "2024-03-02",
        "language": "en",
        "doi": "10.3389/fnins.2020.00587",
        "url": "https://www.frontiersin.org/article/10.3389/fnins.2020.00587/full",
        "issn": "1662-453X",
        "volume": "14",
        "title": "Event-{Based} {Face} {Detection} and {Tracking} {Using} the {Dynamics} of {Eye} {Blinks}",
        "type": "article",
        "key": "lenz_event-based_2020"
    },
    "referenced_papers": [
        {
            "doi": "10.1016/j.trf.2010.12.001",
            "source": "crossref"
        },
        {
            "doi": "10.1002/mds.870120629",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2010.5539960",
            "source": "crossref"
        },
        {
            "doi": "10.1093/sleep/22.6.798",
            "source": "crossref"
        },
        {
            "doi": "10.1109/FG.2017.82",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2014.2352401",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnbot.2019.00082",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1073/pnas.1214804110",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fict.2018.00004",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2015.2401834",
            "source": "crossref"
        },
        {
            "doi": "10.1177/001872089403600209",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neucom.2018.03.030",
            "source": "crossref"
        },
        {
            "doi": "10.1023/B:VISI.0000013087.49260.fb",
            "source": "crossref"
        },
        {
            "doi": "10.1289/ehp.01109s4507",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WCICA.2006.1713656",
            "source": "crossref"
        },
        {
            "title": "Driver workload and eye blink duration",
            "source": "crossref"
        },
        {
            "title": "Analysis of blink rate patterns in normal subjects",
            "source": "crossref"
        },
        {
            "title": "\u201cVisual object tracking using adaptive correlation filters,\u201d",
            "source": "crossref"
        },
        {
            "title": "Blink duration as an indicator of driver sleepiness in professional bus drivers",
            "source": "crossref"
        },
        {
            "title": "\u201cFace detection with the faster R-CNN,\u201d",
            "source": "crossref"
        },
        {
            "title": "Asynchronous event-based multikernel algorithm for high-speed visual features tracking",
            "source": "crossref"
        },
        {
            "title": "HOTS: a hierarchy Of event-based time-surfaces for pattern recognition",
            "source": "crossref"
        },
        {
            "title": "High speed event-based face detection and tracking in the blink of an eye",
            "source": "crossref"
        },
        {
            "title": "Robust event-based object tracking combining correlation filter and cnn representation",
            "source": "crossref"
        },
        {
            "title": "A 128 \u00d7 128 120 db 15 \u03bc s latency asynchronous temporal contrast vision sensor",
            "source": "crossref"
        },
        {
            "title": "\u201cSSD: Single shot multibox detector,\u201d",
            "source": "crossref"
        },
        {
            "title": "Blink-related momentary activation of the default mode network while viewing videos",
            "source": "crossref"
        },
        {
            "title": "Mobile-based eye-blink detection performance analysis on android platform",
            "source": "crossref"
        },
        {
            "title": "A QVGA 143 dB dynamic range frame-free PWM image sensor with lossless pixel-level video compression and time-domain CDS",
            "source": "crossref"
        },
        {
            "title": "\u201cReal-time optimization of viola-jones face detection for mobile platforms,\u201d",
            "source": "crossref"
        },
        {
            "title": "\u201cFaster R-CNN: Towards real-time object detection with region proposal networks,\u201d",
            "source": "crossref"
        },
        {
            "title": "An asynchronous neuromorphic event-driven visual part-based shape tracking",
            "source": "crossref"
        },
        {
            "title": "\u201cHats: Histograms of averaged time surfaces for robust event-based object classification,\u201d",
            "source": "crossref"
        },
        {
            "title": "Blink rate: a possible measure of fatigue",
            "source": "crossref"
        },
        {
            "title": "Face detection using deep learning: an improved faster rcnn approach",
            "source": "crossref"
        },
        {
            "title": "Robust real-time face detection",
            "source": "crossref"
        },
        {
            "title": "Human breathing and eye blink rate responses to airborne chemicals",
            "source": "crossref"
        },
        {
            "title": "\u201cDriver fatigue detection: a survey,\u201d",
            "source": "crossref"
        },
        {
            "title": "\u201cWider face: a face detection benchmark,\u201d",
            "source": "crossref"
        },
        {
            "title": "Faceness-net: face detection through deep facial part responses",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 

The dataset contains 48 from 10 and contains a total of 248 blinks. 

The data was captured using a static camera and contains five different categories of recordings:

1. Indoor sequences with a single subject moving in front of the camera (21 recordings)
2. Outdoor sequences with a single subject moving in front of the camera (21 recordings)
3. A single face moving back and forth to explore robustness to scale (3 recordings)
4. Sequences with multiple faces in the field of view (3 recordings)
5. A single face changing orientation with respect to the camera for occlusion detection (2 recordings)

The uncompressed size of the dataset is 1.8 Gb.
The files are stored as EventStream files. 
The events are stored as tuples of (x, y, t, p), with (0, 1) and `t` has a us.