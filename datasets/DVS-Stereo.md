---
{
    "name": "DVS-Stereo",
    "aliases": [],
    "year": 2018,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS240"
    ],
    "other_sensors": [
        "Kinect RGB-D camera"
    ],
    "category": "Depth, Stereo, and 3D Reconstruction",
    "tags": [
        "Stereo Datasets",
        "Depth Estimation"
    ],
    "description": "Stereo matching",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "Matlab"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://ibm.ent.box.com/s/3hiq58ww1pbbjrinh367ykfdf60xsfm8/folder/50167391951",
                "format": "Matlab",
                "available": true
            }
        ],
        "size_gb": 1.3,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "A Low Power, High Throughput, Fully Event-Based Stereo System",
        "doi": "10.1109/CVPR.2018.00786",
        "authors": [
            "Alexander Andreopoulos",
            "Hirak J. Kashyap",
            "Tapan K. Nayak",
            "Arnon Amir",
            "Myron D. Flickner"
        ],
        "abstract": "We introduce a stereo correspondence system implemented fully on event-based digital hardware, using a fully graph-based non von-Neumann computation model, where no frames, arrays, or any other such data-structures are used. This is the \ufb01rst time that an end-to-end stereo pipeline from image acquisition and recti\ufb01cation, multi-scale spatiotemporal stereo correspondence, winner-take-all, to disparity regularization is implemented fully on event-based hardware. Using a cluster of TrueNorth neurosynaptic processors, we demonstrate their ability to process bilateral event-based inputs streamed live by Dynamic Vision Sensors (DVS), at up to 2,000 disparity maps per second, producing high \ufb01delity disparities which are in turn used to reconstruct, at low power, the depth of events produced from rapidly changing scenes. Experiments on real-world sequences demonstrate the ability of the system to take full advantage of the asynchronous and sparse nature of DVS sensors for low power depth reconstruction, in environments where conventional frame-based cameras connected to synchronous processors would be inef\ufb01cient for rapidly moving objects. System evaluation on event-based sequences demonstrates a \u223c 200 \u00d7 improvement in terms of power per pixel per disparity map compared to the closest stateof-the-art, and maximum latencies of up to 11ms from spike injection to disparity map ejection.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 44,
            "updated": "2025-07-09T10:18:51.879065"
        },
        {
            "source": "scholar",
            "count": 74,
            "updated": "2025-07-09T10:18:51.551481"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content_cvpr_2018/papers/Andreopoulos_A_Low_Power_CVPR_2018_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/8578884"
        },
        {
            "type": "project_page",
            "url": "https://ibm.ent.box.com/s/3hiq58ww1pbbjrinh367ykfdf60xsfm8"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "12",
        "stereo": true
    },
    "bibtex": {
        "pages": "7532--7542",
        "year": 2018,
        "month": "jun",
        "author": "Andreopoulos, Alexander and Kashyap, Hirak J. and Nayak, Tapan K. and Amir, Arnon and Flickner, Myron D.",
        "publisher": "IEEE",
        "booktitle": "2018 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition}",
        "urldate": "2023-09-05",
        "language": "en",
        "doi": "10.1109/CVPR.2018.00786",
        "url": "https://ieeexplore.ieee.org/document/8578884/",
        "isbn": "978-1-5386-6420-9",
        "title": "A {Low} {Power}, {High} {Throughput}, {Fully} {Event}-{Based} {Stereo} {System}",
        "address": "Salt Lake City, UT",
        "type": "inproceedings",
        "key": "andreopoulos_low_2018"
    },
    "referenced_papers": [
        {
            "doi": "10.1023/B:VISI.0000029664.99615.94",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-04667-4_18",
            "source": "crossref"
        },
        {
            "doi": "10.5772/12941",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNN.2005.860850",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC.2006.1696265",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2004.1261078",
            "source": "crossref"
        },
        {
            "doi": "10.1109/5.726791",
            "source": "crossref"
        },
        {
            "doi": "10.1080/15599610802438680",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11554-012-0313-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2011.6130359",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICICISYS.2010.5658259",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2007.383248",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2017.00535",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cviu.2010.03.012",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MMUL.2012.24",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2013.6707078",
            "source": "crossref"
        },
        {
            "doi": "10.1073/pnas.1604850113",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TC.2012.142",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11063-015-9434-5",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2012.6248074",
            "source": "crossref"
        },
        {
            "doi": "10.1007/3-540-44745-8_7",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1038/14819",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298644",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2010.5537289",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIE.2015.2477265",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2010.5536970",
            "source": "crossref"
        },
        {
            "doi": "10.1023/A:1014573219977",
            "source": "crossref"
        },
        {
            "doi": "10.1109/SC.2016.11",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2011.2180025",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.4108/eai.3-12-2015.2262447",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2014.6865114",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2013.03.006",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2013.6707077",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neuron.2012.01.010",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-63537-8_11",
            "source": "crossref"
        },
        {
            "doi": "10.1109/RADIOELEK.2017.7937602",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cviu.2013.04.005",
            "source": "crossref"
        },
        {
            "doi": "10.1147/JRD.2015.2400251",
            "source": "crossref"
        },
        {
            "doi": "10.2514/1.8371",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2013.50",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2014.69",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2017.51",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2313565",
            "source": "crossref"
        },
        {
            "doi": "10.1088/0957-0233/25/5/055108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2013.13",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-1-4684-6775-8_9",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-1-4613-1639-8_9",
            "source": "crossref"
        },
        {
            "doi": "10.1126/science.1254642",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298925",
            "source": "crossref"
        },
        {
            "title": "Efficient stereo matching algorithm with edge-detecting",
            "source": "crossref"
        },
        {
            "title": "Bio-inspired stereo vision system with silicon retina imagers",
            "source": "crossref"
        },
        {
            "title": "Event-based stereo matching approaches for frameless address event stereo data",
            "source": "crossref"
        },
        {
            "title": "Smartcam for real-time stereo vision-address-event based embedded system",
            "source": "crossref"
        },
        {
            "title": "Vision based autonomous vehicle navigation with self-organizing map feature matching technique",
            "source": "crossref"
        },
        {
            "title": "Stereo matching by training a convolutional neural network to compare image patches",
            "source": "crossref"
        },
        {
            "title": "A highperformance hardware architecture for a frameless stereo vision algorithm implemented on a fpga platform",
            "source": "crossref"
        },
        {
            "title": "Convolutional networks for fast, energy-efficient neuromorphic computing",
            "source": "crossref"
        },
        {
            "title": "High-speed segmentation-driven high-resolution matching",
            "source": "crossref"
        },
        {
            "title": "High-resolution stereo datasets with subpixel-accurate ground truth",
            "source": "crossref"
        },
        {
            "title": "On the use of orientation filters for 3d reconstruction in event-driven stereo vision",
            "source": "crossref"
        },
        {
            "title": "Spiking cooperative stereo-matching at 2 ms latency with neuromorphic hardware",
            "source": "crossref"
        },
        {
            "title": "Sparse stereo disparity map densification using hierarchical image segmentation",
            "source": "crossref"
        },
        {
            "title": "The fast bilateral solver",
            "source": "crossref"
        },
        {
            "title": "Look wider to match image patches with convolutional neural networks",
            "source": "crossref"
        },
        {
            "title": "A spiking neural network model of 3d perception for event-based neuromorphic stereo vision systems",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Dataset contains 12 sequences
