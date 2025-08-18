---
{
    "name": "DVS-GESTURE",
    "aliases": [],
    "year": 2017,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DVS128"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Human Action Recognition",
        "Gesture Recognition",
        "Sign Language",
        "Hand Pose Detection"
    ],
    "task": "Gesture Recognition",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "Project link in the paper no longer works.",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://ibm.ent.box.com/s/3hiq58ww1pbbjrinh367ykfdf60xsfm8",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 2.7,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "A Low Power, Fully Event-Based Gesture Recognition System",
        "doi": "10.1109/CVPR.2017.781",
        "authors": [
            "Arnon Amir",
            "Brian Taba",
            "David Berg",
            "Timothy Melano",
            "Jeffrey McKinstry",
            "Carmelo Di Nolfo",
            "Tapan Nayak",
            "Alexander Andreopoulos",
            "Guillaume Garreau",
            "Marcela Mendoza",
            "Jeff Kusnitz",
            "Michael Debole",
            "Steve Esser",
            "Tobi Delbruck",
            "Myron Flickner",
            "Dharmendra Modha"
        ],
        "abstract": "We present the first gesture recognition system implemented end-to-end on event-based hardware, using a TrueNorth neurosynaptic processor to recognize hand gestures in real-time at low power from events streamed live by a Dynamic Vision Sensor (DVS). The biologically inspired DVS transmits data only when a pixel detects a change, unlike traditional frame-based cameras which sample every pixel at a fixed frame rate. This sparse, asynchronous data representation lets event-based cameras operate at much lower power than frame-based cameras. However, much of the energy efficiency is lost if, as in previous work, the event stream is interpreted by conventional synchronous processors. Here, for the first time, we process a live DVS event stream using TrueNorth, a natively event-based processor with 1 million spiking neurons. Configured here as a convolutional neural network (CNN), the TrueNorth chip identifies the onset of a gesture with a latency of 105 ms while consuming less than 200mW . The CNN achieves 96.5\\% out-of-sample accuracy on a newly collected DVS dataset (DvsGesture) comprising 11 hand gesture categories from 29 subjects under 3 illumination conditions.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 593,
            "updated": "2025-07-02T20:56:21.590804"
        },
        {
            "source": "scholar",
            "count": 1167,
            "updated": "2025-07-02T20:56:21.266593"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content_cvpr_2017/papers/Amir_A_Low_Power_CVPR_2017_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/8100264"
        },
        {
            "type": "project_page",
            "url": "http://research.ibm.com/dvsgesture/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "1342",
        "num_classes": "11",
        "num_subjects": "29",
        "num_categories": "3"
    },
    "bibtex": {
        "pages": "7388--7397",
        "year": 2017,
        "month": "jul",
        "author": "Amir, Arnon and Taba, Brian and Berg, David and Melano, Timothy and McKinstry, Jeffrey and Di Nolfo, Carmelo and Nayak, Tapan and Andreopoulos, Alexander and Garreau, Guillaume and Mendoza, Marcela and Kusnitz, Jeff and Debole, Michael and Esser, Steve and Delbruck, Tobi and Flickner, Myron and Modha, Dharmendra",
        "publisher": "IEEE",
        "booktitle": "2017 {IEEE} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/CVPR.2017.781",
        "url": "https://ieeexplore.ieee.org/document/8100264/",
        "isbn": "978-1-5386-0457-1",
        "title": "A {Low} {Power}, {Fully} {Event}-{Based} {Gesture} {Recognition} {System}",
        "address": "Honolulu, HI",
        "type": "inproceedings",
        "key": "amir_low_2017"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ISCAS.2015.7169169",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1291233.1291311",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2014.2337331",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2015.2461544",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICSIPA.2011.6144164",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-07230-2_33",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cviu.2015.08.004",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2013.98",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.213",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.450",
            "source": "crossref"
        },
        {
            "doi": "10.1088/1741-2560/13/5/051001",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00405",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2012.59",
            "source": "crossref"
        },
        {
            "doi": "10.1111/j.1749-818X.2008.00067.x",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.22.99",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.412",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-005-1838-7",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.456",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2013.6707077",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2015.7301342",
            "source": "crossref"
        },
        {
            "doi": "10.1145/108844.108874",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2015.2469551",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2016.7527497",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCE-TW.2016.7520980",
            "source": "crossref"
        },
        {
            "doi": "10.1109/VSPETS.2005.1570899",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1073/pnas.1604850113",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2013.6707078",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2537340",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2014.2308551",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-540-88688-4_48",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1201/9781420064995-c34",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC.2006.1696265",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2733373.2807412",
            "source": "crossref"
        },
        {
            "doi": "10.1126/science.1254642",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00374",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TSMCC.2007.893280",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-012-0594-8",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1476589.1476628",
            "source": "crossref"
        },
        {
            "title": "Multiscale deep learning for gesture detection and localization",
            "source": "crossref"
        },
        {
            "title": "Batch normalization: Accelerating deep network training by reducing internal covariate shift",
            "source": "crossref"
        },
        {
            "title": "Combining modality specific deep neural networks for emotion recognition in video",
            "source": "crossref"
        },
        {
            "title": "Evaluation of local spatio-temporal features for action recognition",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 
- Contains 1342 recordings
- Contains 11 different arm and hand gestures
- Contains 29 different subjects
- Contains 3 different lighting conditions