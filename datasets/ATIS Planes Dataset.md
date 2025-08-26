---
{
    "name": "ATIS Planes Dataset",
    "aliases": [
        "DVS_Planes"
    ],
    "year": 2019,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "ATIS"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Object Classification"
    ],
    "description": "High-speed object detection and classification",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive",
            "Direct Download"
        ],
        "file_formats": [
            "Matlab"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1d6smF5DQMFelJTelrUhgf9Fj9VigfMPU",
                "format": "Matlab",
                "available": true
            }
        ],
        "size_gb": 0.655,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Investigation of Event-Based Surfaces for High-Speed Detection, Unsupervised Feature Extraction, and Object Recognition",
        "doi": "10.3389/fnins.2018.01047",
        "authors": [
            "Saeed Afshar",
            "Tara Julia Hamilton",
            "Jonathan Tapson",
            "Andr\u00e9 van Schaik",
            "Gregory Cohen"
        ],
        "abstract": "In this work, we investigate event-based feature extraction through a rigorous framework of testing. We test a hardware efficient variant of Spike Timing Dependent Plasticity (STDP) on a range of spatio-temporal kernels with different surface decaying methods, decay functions, receptive field sizes, feature numbers, and back end classifiers. This detailed investigation can provide helpful insights and rules of thumb for performance vs. complexity trade-offs in more generalized networks, especially in the context of hardware implementation, where design choices can incur significant resource costs. The investigation is performed using a new dataset consisting of model airplanes being dropped free-hand close to the sensor. The target objects exhibit a wide range of relative orientations and velocities. This range of target velocities, analyzed in multiple configurations, allows a rigorous comparison of time-based decaying surfaces (time surfaces) vs. event index-based decaying surface (index surfaces), which are used to perform unsupervised feature extraction, followed by target detection and recognition. We examine each processing stage by comparison to the use of raw events, as well as a range of alternative layer structures, and the use of random features. By comparing results from a linear classifier and an ELM classifier, we evaluate how each element of the system affects accuracy. To generate time and index surfaces, the most commonly used kernels, namely event binning kernels, linearly, and exponentially decaying kernels, are investigated. Index surfaces were found to outperform time surfaces in recognition when invariance to target velocity was made a requirement. In the investigation of network structure, larger networks of neurons with large receptive field sizes were found to perform best. We find that a small number of event-based feature extractors can project the complex spatio-temporal event patterns of the dataset to an almost linearly separable representation in feature space, with best performing linear classifier achieving 98.75\\% recognition accuracy, using only 25 feature extracting neurons.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 27,
            "updated": "2025-06-10T10:53:52.817381"
        },
        {
            "source": "scholar",
            "count": 53,
            "updated": "2025-06-10T10:53:52.482670"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/1603.04223"
        },
        {
            "type": "paper",
            "url": "https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2018.01047/full"
        },
        {
            "type": "project_page",
            "url": "https://www.westernsydney.edu.au/icns/resources/reproducible_research3/publication_support_materials2/atis_planes"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "4",
        "num_recordings": "802",
        "stereo": false
    },
    "bibtex": {
        "pages": "1047",
        "year": 2019,
        "month": "jan",
        "author": "Afshar, Saeed and Hamilton, Tara Julia and Tapson, Jonathan and Van Schaik, Andr\u00e9 and Cohen, Gregory",
        "journal": "Frontiers in Neuroscience",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.3389/fnins.2018.01047",
        "url": "https://www.frontiersin.org/article/10.3389/fnins.2018.01047/full",
        "issn": "1662-453X",
        "volume": "12",
        "title": "Investigation of {Event}-{Based} {Surfaces} for {High}-{Speed} {Detection}, {Unsupervised} {Feature} {Extraction}, and {Object} {Recognition}",
        "type": "article",
        "key": "Afshar2019"
    },
    "referenced_papers": [
        {
            "doi": "10.3389/fnins.2014.00377",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBCAS.2015.2416391",
            "source": "crossref"
        },
        {
            "doi": "10.1162/NECO_a_00703",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00049",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2011.11.001",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2015.02.013",
            "source": "crossref"
        },
        {
            "doi": "10.1109/BioCAS.2014.6981783",
            "source": "crossref"
        },
        {
            "doi": "10.1038/srep14730",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00405",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2015.7169173",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00046",
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
            "doi": "10.1109/TNNLS.2014.2308551",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.proeng.2012.04.128",
            "source": "crossref"
        },
        {
            "doi": "10.1126/science.275.5297.213",
            "source": "crossref"
        },
        {
            "doi": "10.1371/journal.pcbi.0030031",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2015.2392947",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2016.2536741",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00481",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2014.2362542",
            "source": "crossref"
        },
        {
            "title": "Racing to learn : statistical inference and learning in a single spiking neuron with adaptive kernels",
            "source": "crossref"
        },
        {
            "title": "Turn down that noise: synaptic encoding of afferent SNR in a single spiking neuron",
            "source": "crossref"
        },
        {
            "title": "What can neuromorphic event-driven precise timing add to spike-based pattern recognition?",
            "source": "crossref"
        },
        {
            "title": "A dataset for visual navigation with neuromorphic methods",
            "source": "crossref"
        },
        {
            "title": "Asynchronous frameless event-based optical flow",
            "source": "crossref"
        },
        {
            "title": "Asynchronous event-based corner detection and matching",
            "source": "crossref"
        },
        {
            "title": "Event-based Sensing for Space Situational Awareness",
            "source": "crossref"
        },
        {
            "title": "Real-time object recognition and orientation estimation using an event-based camera and CNN",
            "source": "crossref"
        },
        {
            "title": "Real time unsupervised learning of visual stimuli in neuromorphic VLSI systems",
            "source": "crossref"
        },
        {
            "title": "Event-driven ball detection and gaze fixation in cluttter",
            "source": "crossref"
        },
        {
            "title": "Robust visual tracking with a freely-moving event camera",
            "source": "crossref"
        },
        {
            "title": "DVS benchmark datasets for object tracking, action recognition, and object recognition",
            "source": "crossref"
        },
        {
            "title": "Scene stitching with event-driven sensors on a robot head platform",
            "source": "crossref"
        },
        {
            "title": "Spatiotemporal features for asynchronous event-based data",
            "source": "crossref"
        },
        {
            "title": "Asynchronous event-based multikernel algorithm for high-speed visual features tracking",
            "source": "crossref"
        },
        {
            "title": "Hots: a hierarchy of event-based time-surfaces for pattern recognition",
            "source": "crossref"
        },
        {
            "title": "Real-time gesture interface based on event-driven processing from stereo silicon retinas",
            "source": "crossref"
        },
        {
            "title": "A 128 \u00d7 128 120 dB 15 \u03bcs latency asynchronous temporal contrast vision sensor",
            "source": "crossref"
        },
        {
            "title": "Can silicon retina sensors be used for optical motion analysis in sports?",
            "source": "crossref"
        },
        {
            "title": "Regulation of synaptic efficacy by coincidence of postsynaptic APs and EPSPs",
            "source": "crossref"
        },
        {
            "title": "Unsupervised learning of visual features through spike timing dependent plasticity",
            "source": "crossref"
        },
        {
            "title": "Converting static image datasets to spiking neuromorphic datasets using saccades",
            "source": "crossref"
        },
        {
            "title": "HFirst: a temporal approach to object recognition",
            "source": "crossref"
        },
        {
            "title": "Bag of events: an efficient probability-based feature extraction method for AER image sensors",
            "source": "crossref"
        },
        {
            "title": "A QVGA 143 dB dynamic range frame-free PWM image sensor with ldossless pixel-level video compression and time-domain CDS",
            "source": "crossref"
        },
        {
            "title": "Poker-DVS and MNIST-DVS. Their history, how they were made, and other details",
            "source": "crossref"
        },
        {
            "title": "Feedforward categorization on AER motion events using cortex-like features in a spiking neural network",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

A data-set of free hand dropped airplane models. Four plane types F117, Su24, Su35 and Mig31. The field of view is 304x240. There are 200 files per plane type making up 800 files in total.

The dataset is in .mat files each recording is contained in a variables called TD

Corresponding Author: s.v.afshar@gmail.com
