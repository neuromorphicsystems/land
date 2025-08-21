---
{
    "name": "N-SOD",
    "aliases": [],
    "year": 2020,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS240"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "None"
    ],
    "description": "Object Detection and Classification",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/10_bnZ_TOcq7xCtCiDcaDiIO3_Txgr19S",
                "format": "Binary",
                "available": true
            }
        ],
        "size_gb": 2.16,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "Low-Power Dynamic Object Detection and Classification With Freely Moving Event Cameras",
        "doi": "10.3389/fnins.2020.00135",
        "authors": [
            "Bharath Ramesh",
            "Andr\u00e9s Ussa",
            "Luca Della Vedova",
            "Hong Yang",
            "Garrick Orchard"
        ],
        "abstract": "We present the \ufb01rst purely event-based, energy-ef\ufb01cient approach for dynamic object detection and categorization with a freely moving event camera. Compared to traditional cameras, event-based object recognition systems are considerably behind in terms of accuracy and algorithmic maturity. To this end, this paper presents an event-based feature extraction method devised by accumulating local activity across the image frame and then applying principal component analysis (PCA) to the normalized neighborhood region. Subsequently, we propose a backtracking-free k-d tree mechanism for ef\ufb01cient feature matching by taking advantage of the low-dimensionality of the feature representation. Additionally, the proposed k-d tree mechanism allows for feature selection to obtain a lower-dimensional object representation when hardware resources are limited to implement PCA. Consequently, the proposed system can be realized on a \ufb01eld-programmable gate array (FPGA) device leading to high performance over resource ratio. The proposed system is tested on real-world event-based datasets for object categorization, showing superior classi\ufb01cation performance compared to state-of-the-art algorithms. Additionally, we veri\ufb01ed the real-time FPGA performance of the proposed object detection method, trained with limited data as opposed to deep learning methods, under a closed-loop aerial vehicle \ufb02ight mode. We also compare the proposed object categorization framework to pre-trained convolutional neural networks using transfer learning and highlight the drawbacks of using frame-based sensors under dynamic camera motion. Finally, we provide critical insights about the feature extraction method and the classi\ufb01cation parameters on the system performance, which aids in understanding the framework to suit various low-power (less than a few watts) application scenarios.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 15,
            "updated": "2025-06-12T09:40:17.919469"
        },
        {
            "source": "scholar",
            "count": 27,
            "updated": "2025-06-12T09:40:17.735065"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2020.00135/full"
        },
        {
            "type": "project_page",
            "url": "https://drive.google.com/drive/folders/10_bnZ_TOcq7xCtCiDcaDiIO3_Txgr19S"
        }
    ],
    "full_name": "Neuromorphic Single Object Dataset (N-SOD)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "135",
        "year": 2020,
        "month": "feb",
        "author": "Ramesh, Bharath and Ussa, Andr\u00e9s and Della Vedova, Luca and Yang, Hong and Orchard, Garrick",
        "journal": "Frontiers in Neuroscience",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.3389/fnins.2020.00135",
        "url": "https://www.frontiersin.org/article/10.3389/fnins.2020.00135/full",
        "issn": "1662-453X",
        "volume": "14",
        "title": "Low-{Power} {Dynamic} {Object} {Detection} and {Classification} {With} {Freely} {Moving} {Event} {Cameras}",
        "type": "article",
        "key": "ramesh_low-power_2020"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.1997.609451",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2013.00223",
            "source": "crossref"
        },
        {
            "doi": "10.1109/QoMEX.2016.7498955",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2014.2335831",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8594119",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2010.5540039",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7758089",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00508",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2019.2941282",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2016.7539103",
            "source": "crossref"
        },
        {
            "doi": "10.1023/B:VISI.0000029664.99615.94",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2012.2198930",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2013.00178",
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
            "doi": "10.3389/fnins.2018.00118",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2346153",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00500-017-2939-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2919301",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2577031",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2006.92",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2012.02.009",
            "source": "crossref"
        },
        {
            "title": "FPGA/soft-processor based real-time object tracking system",
            "source": "crossref"
        },
        {
            "title": "Algorithms for fast vector quantization",
            "source": "crossref"
        },
        {
            "title": "Shape indexing using approximate nearest-neighbour search in high-dimensional spaces",
            "source": "crossref"
        },
        {
            "title": "A 240 x 180 130 db 3 \u03bcs latency global shutter spatiotemporal vision sensor",
            "source": "crossref"
        },
        {
            "title": "An embedded AER dynamic vision sensor for low-latency pole balancing",
            "source": "crossref"
        },
        {
            "title": "On-board real-time tracking of pedestrians on a uav",
            "source": "crossref"
        },
        {
            "title": "Robotic goalie with 3 ms reaction time at 4% CPU load using event-based dynamic vision sensor",
            "source": "crossref"
        },
        {
            "title": "Understanding how image quality affects deep neural networks",
            "source": "crossref"
        },
        {
            "title": "Object categorization using co-occurrence, location and appearance",
            "source": "crossref"
        },
        {
            "title": "Novel fpga implementation of hand sign recognition system with som-hebb classifier",
            "source": "crossref"
        },
        {
            "title": "Towards event-driven object detection with off-the-shelf deep learning",
            "source": "crossref"
        },
        {
            "title": "Aggregating local descriptors into a compact image representation",
            "source": "crossref"
        },
        {
            "title": "Low-latency visual odometry using event-based feature tracks",
            "source": "crossref"
        },
        {
            "title": "Hots: A hierarchy of event-based time-surfaces for pattern recognition",
            "source": "crossref"
        },
        {
            "title": "Beyond bags of features: spatial pyramid matching for recognizing natural scene categories",
            "source": "crossref"
        },
        {
            "title": "Training deep spiking neural networks using backpropagation",
            "source": "crossref"
        },
        {
            "title": "Event-based dynamic face detection and tracking based on activity",
            "source": "crossref"
        },
        {
            "title": "Low latency event-based filtering and feature extraction for dynamic vision sensors in real-time FPGA applications",
            "source": "crossref"
        },
        {
            "title": "Combined frame- and event-based detection and tracking",
            "source": "crossref"
        },
        {
            "title": "Distinctive image features from scale-invariant keypoints",
            "source": "crossref"
        },
        {
            "title": "Speed invariant time surface for learning to detect corner points with event-based cameras",
            "source": "crossref"
        },
        {
            "title": "Retinal ganglion cell software and FPGA model implementation for object detection and tracking",
            "source": "crossref"
        },
        {
            "title": "Expanding a robot's life: low power object recognition via fpga-based dcnn deployment",
            "source": "crossref"
        },
        {
            "title": "Fast approximate nearest neighbors with automatic algorithm configuration",
            "source": "crossref"
        },
        {
            "title": "Phased LSTM: accelerating recurrent network training for long or event-based sequences",
            "source": "crossref"
        },
        {
            "title": "Asynchronous event-based visual shape tracking for stable haptic feedback in microrobotics",
            "source": "crossref"
        },
        {
            "title": "Sampling strategies for bag-of-features image classification",
            "source": "crossref"
        },
        {
            "title": "Real-time classification and sensor fusion with a spiking deep belief network",
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
            "title": "A noise filtering algorithm for event-based asynchronous change detection image sensors on truenorth and its implementation on truenorth",
            "source": "crossref"
        },
        {
            "title": "Retinomorphic event-based vision sensors: bioinspired cameras with spiking output",
            "source": "crossref"
        },
        {
            "title": "Scalable scene understanding via saliency consensus",
            "source": "crossref"
        },
        {
            "title": "Spike context: a neuromorphic descriptor for pattern recognition",
            "source": "crossref"
        },
        {
            "title": "PCA-RECT: an energy-efficient object detection approach for event cameras",
            "source": "crossref"
        },
        {
            "title": "Dart: distribution aware retinal transform for event-based cameras",
            "source": "crossref"
        },
        {
            "title": "Yolov3: an incremental improvement",
            "source": "crossref"
        },
        {
            "title": "Faster r-cnn: towards real-time object detection with region proposal networks",
            "source": "crossref"
        },
        {
            "title": "Continuous-time intensity estimation using event cameras",
            "source": "crossref"
        },
        {
            "title": "Hardware/software co-design of an FPGA-based embedded tracking system",
            "source": "crossref"
        },
        {
            "title": "Optimised kd-trees for fast image descriptor matching",
            "source": "crossref"
        },
        {
            "title": "HATS: histograms of averaged time surfaces for robust event-based object classification",
            "source": "crossref"
        },
        {
            "title": "A saliency map based on sampling an image into random rectangular regions of interest",
            "source": "crossref"
        },
        {
            "title": "Automatic number plate recognition on fpga",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

### Dataset

The N-SOD dataset consists of 3 objects with sample varying length in time (20s). The 3 objects are: thumper 6-wheel robot, unmanned aerial vehicle and landing platform

The dataset is divided by Train and Test folders, using the split employed for the PCA-RECT object tracking and detection system (https://github.com/nusneuromorphic/PCA-RECT).

The data is composed of binary files.

To read them, the MATLAB AER Vision Functions are needed (https://github.com/gorchard/Matlab_AER_vision_functions). After downloading these, use the following steps:

- Add the AER vision functions to the MATLAB path.

- Load a file using the "read_linux" function.
  e.g. td = read_linux('../N-SOD Dataset/Train/Thumper/thumper1_train.bin');

- Visualize the data using the ShowTD function.
  e.g. ShowTD(td);

Adapted from https://drive.google.com/file/d/15UITXgFff0C2P6DCqE81qZrJo2VSiFxJ/view?usp=sharing
