---
{
    "name": "DVSFLOW16",
    "aliases": [],
    "year": 2016,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS240"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "Optical Flow"
    ],
    "task": "Optical Flow",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1eizQScMSVgAZKokkovBc-teMhCqt5goL?usp=sharing",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 3.16,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "Evaluation of Event-Based Algorithms for Optical Flow with Ground-Truth from Inertial Measurement Sensor",
        "doi": "10.3389/fnins.2016.00176",
        "authors": [
            "Bodo Rueckauer",
            "Tobi Delbruck"
        ],
        "abstract": "In this study we compare nine optical \ufb02ow algorithms that locally measure the \ufb02ow normal to edges according to accuracy and computation cost. In contrast to conventional, frame-based motion \ufb02ow algorithms, our open-source implementations compute optical \ufb02ow based on address-events from a neuromorphic Dynamic Vision Sensor (DVS). For this benchmarking we created a dataset of two synthesized and three real samples recorded from a 240 \u00d7 180 pixel Dynamic and Active-pixel Vision Sensor (DAVIS). This dataset contains events from the DVS as well as conventional frames to support testing state-of-the-art frame-based methods. We introduce a new source for the ground truth: In the special case that the perceived motion stems solely from a rotation of the vision sensor around its three camera axes, the true optical \ufb02ow can be estimated using gyro data from the inertial measurement unit integrated with the DAVIS camera. This provides a ground-truth to which we can compare algorithms that measure optical \ufb02ow by means of motion cues. An analysis of error sources led to the use of a refractory period, more accurate numerical derivatives and a Savitzky-Golay \ufb01lter to achieve signi\ufb01cant improvements in accuracy. Our pure Java implementations of two recently published algorithms reduce computational cost by up to 29\\% compared to the original implementations. Two of the algorithms introduced in this paper further speed up processing by a factor of 10 compared with the original implementations, at equal or better accuracy. On a desktop PC, they run in real-time on dense natural input recorded by a DAVIS camera.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 80,
            "updated": "2025-07-09T10:10:37.175059"
        },
        {
            "source": "scholar",
            "count": 163,
            "updated": "2025-07-09T10:10:36.862580"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2016.00176/full"
        },
        {
            "type": "project_page",
            "url": "https://docs.google.com/document/d/1r9sRYANGuDTUcfSSq-sL4sd79SfjHGNRul_10uztDaI/edit#heading=h.sbnu5gtazqjq"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "year": 2016,
        "month": "apr",
        "author": "Rueckauer, Bodo and Delbruck, Tobi",
        "journal": "Frontiers in Neuroscience",
        "urldate": "2023-09-05",
        "language": "en",
        "doi": "10.3389/fnins.2016.00176",
        "url": "http://journal.frontiersin.org/Article/10.3389/fnins.2016.00176/abstract",
        "issn": "1662-453X",
        "volume": "10",
        "title": "Evaluation of {Event}-{Based} {Algorithms} for {Optical} {Flow} with {Ground}-{Truth} from {Inertial} {Measurement} {Sensor}",
        "type": "article",
        "key": "rueckauer_evaluation_2016"
    },
    "referenced_papers": [
        {
            "doi": "10.1007/s11263-010-0390-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2347207",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-19258-1_27",
            "source": "crossref"
        },
        {
            "doi": "10.1007/BF01420984",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2011.11.001",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00137",
            "source": "crossref"
        },
        {
            "doi": "10.1109/iscas.2010.5537149",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2014.6865714",
            "source": "crossref"
        },
        {
            "doi": "10.1016/0004-3702(81)90024-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2346763",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2346153",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-013-0644-x",
            "source": "crossref"
        },
        {
            "title": "A database and evaluation methodology for optical flow",
            "source": "crossref"
        },
        {
            "title": "Contour motion estimation for asynchronous event-driven cameras",
            "source": "crossref"
        },
        {
            "title": "Bio-inspired motion estimation with event-driven sensors",
            "source": "crossref"
        },
        {
            "title": "Performance of optical flow techniques",
            "source": "crossref"
        },
        {
            "title": "Event-based visual flow",
            "source": "crossref"
        },
        {
            "title": "Asynchronous frameless event-based optical flow",
            "source": "crossref"
        },
        {
            "title": "A 240 \u00d7 180 130 dB 3 us latency global shutter spatiotemporal vision sensor",
            "source": "crossref"
        },
        {
            "title": "On event-based optical flow detection",
            "source": "crossref"
        },
        {
            "title": "Frame-free dynamic digital vision",
            "source": "crossref"
        },
        {
            "title": "Fun with asynchronous vision sensors and processing",
            "source": "crossref"
        },
        {
            "title": "Activity-driven, event-based vision sensors",
            "source": "crossref"
        },
        {
            "title": "Integration of dynamic vision sensor with inertial measurement unit for electronically stabilized event-based vision",
            "source": "crossref"
        },
        {
            "title": "Optical Flow Estimation",
            "source": "crossref"
        },
        {
            "title": "Determining optical flow",
            "source": "crossref"
        },
        {
            "title": "A 128 \u00d7 128 120 db 15 \u03bcs latency asynchronous temporal contrast vision sensor",
            "source": "crossref"
        },
        {
            "title": "Bioinspired visual motion estimation",
            "source": "crossref"
        },
        {
            "title": "A QVGA 143 dB dynamic range frame-free PWM image sensor with lossless pixel-level video compression and time-domain CDS",
            "source": "crossref"
        },
        {
            "title": "Retinomorphic event-based vision sensors: bioinspired cameras with spiking output",
            "source": "crossref"
        },
        {
            "title": "A quantitative analysis of current practices in optical flow estimation and the principles behind them",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
