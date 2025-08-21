---
{
    "name": "Rebecq2019",
    "aliases": [],
    "year": 2019,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Samsung DVS"
    ],
    "other_sensors": [
        "Huawei P20 Pro"
    ],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "High-Speed Video Reconstruction",
        "Colour Sensors"
    ],
    "description": "Image Reconstruction from events",
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
            "ROSbag"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://rpg.ifi.uzh.ch/data/E2VID/datasets/ecoco_depthmaps_test.zip",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 44.7,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "High Speed and High Dynamic Range Video with an Event Camera",
        "doi": "10.1109/tpami.2019.2963386",
        "authors": [
            "Henri Rebecq",
            "Rene Ranftl",
            "Vladlen Koltun",
            "Davide Scaramuzza"
        ],
        "abstract": "Event cameras are novel sensors that report brightness changes in the form of a stream of asynchronous \u201cevents\u201d instead of intensity frames. They offer signi\ufb01cant advantages with respect to conventional cameras: high temporal resolution, high dynamic range, and no motion blur. While the stream of events encodes in principle the complete visual signal, the reconstruction of an intensity image from a stream of events is an ill-posed problem in practice. Existing reconstruction approaches are based on hand-crafted priors and strong assumptions about the imaging process as well as the statistics of natural images. In this work we propose to learn to reconstruct intensity images from event streams directly from data instead of relying on any hand-crafted priors. We propose a novel recurrent network to reconstruct videos from a stream of events, and train it on a large amount of simulated event data. During training we propose to use a perceptual loss to encourage reconstructions to follow natural image statistics. We further extend our approach to synthesize color images from color event streams. Our quantitative experiments show that our network surpasses state-of-the-art reconstruction methods by a large margin in terms of image quality ( {\\textgreater} 20\\%), while comfortably running in real-time. We show that the network is able to synthesize high framerate videos ( {\\textgreater} 5; 000 frames per second) of high-speed phenomena (e.g., a bullet hitting an object) and is able to provide high dynamic range reconstructions in challenging lighting conditions. As an additional contribution, we demonstrate the effectiveness of our reconstructions as an intermediate representation for event data. We show that off-the-shelf computer vision algorithms can be applied to our reconstructions for tasks such as object classi\ufb01cation and visual-inertial odometry and that this strategy consistently outperforms algorithms that were speci\ufb01cally designed for event data. We release the reconstruction code, a pre-trained model and the datasets to enable further research.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 355,
            "updated": "2025-06-08T13:55:33.270228"
        },
        {
            "source": "scholar",
            "count": 753,
            "updated": "2025-06-08T13:55:32.457936"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/1906.07165"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/8946715"
        },
        {
            "type": "project_page",
            "url": "https://rpg.ifi.uzh.ch/E2VID.html"
        },
        {
            "type": "github_page",
            "url": "https://github.com/uzh-rpg/rpg_e2vid"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "1964--1980",
        "year": 2021,
        "month": "jun",
        "author": "Rebecq, Henri and Ranftl, Rene and Koltun, Vladlen and Scaramuzza, Davide",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "urldate": "2024-04-13",
        "number": "6",
        "language": "en",
        "doi": "10.1109/TPAMI.2019.2963386",
        "url": "https://ieeexplore.ieee.org/document/8946715/",
        "issn": "0162-8828, 2160-9292, 1939-3539",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "43",
        "title": "High {Speed} and {High} {Dynamic} {Range} {Video} with an {Event} {Camera}",
        "type": "article",
        "key": "Rebecq2021"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TIP.2003.819861",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00068",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01267-0_11",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-015-0816-y",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593941",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2018.8460664",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00961",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2018.2852335",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2014.6865228",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TED.2018.2833106",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/5.726791",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2006.79",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.16",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.616",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2018.2853729",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2016.2597321",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2015.7353389",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364914554813",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ROBOT.2007.364024",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2014.6942940",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.179",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2769655",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01246-5_15",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.28.26",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01258-8_46",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TSP.2006.881199",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-018-1106-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2016.7477561",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSII.2018.2824899",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2011.6033299",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2009.5117867",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00215",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2015.2392947",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2017.8050412",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "title": "Very deep convolutional networks for large-scale image recognition",
            "source": "crossref"
        },
        {
            "title": "Perceptual losses for real-time style transfer and super-resolution",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "Automatic differentiation in PyTorch",
            "source": "crossref"
        },
        {
            "title": "Batch normalization: Accelerating deep network training by reducing internal covariate shift",
            "source": "crossref"
        },
        {
            "title": "Convolutional LSTM network: A machine learning approach for precipitation nowcasting",
            "source": "crossref"
        },
        {
            "title": "Unsupervised event-based optical flow using motion compensation",
            "source": "crossref"
        },
        {
            "title": "Microsoft COCO: Common objects in context",
            "source": "crossref"
        },
        {
            "title": "ESIM: An open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "U-net: Convolutional networks for biomedical image segmentation",
            "source": "crossref"
        },
        {
            "title": "Continuous-time intensity estimation using event cameras",
            "source": "crossref"
        },
        {
            "title": "Chroma subsampling notation",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "ReduceFlicker",
            "source": "crossref"
        },
        {
            "title": "A 640x480 dynamic vision sensor with a 9 um pixel and 300Meps address-event representation",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
