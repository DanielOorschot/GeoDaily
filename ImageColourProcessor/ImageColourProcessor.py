
if __name__ == '__main__':
    from PIL import Image
    import glob, os

    #codes are based on html colour list
    colour_rgb_list = ["yellow","blue","red","green", "white","black"]
    colour_reference = [(255, 255, 0),(0, 0, 255),(255, 0, 0),(0, 128, 0),(255,255,255),(0,0,0)]

    #open all
    flag_info = {}
    flag_colour_info = {}
    for infile in glob.glob("*.png"):
        file, ext = os.path.splitext(infile)
        with Image.open(infile) as im:
            imrgb = im.convert('RGB')
            colour_list = imrgb.getcolors()
            num_pixels = imrgb.size[0] * imrgb.size[1]
            final_list = []
            for i in range(len(colour_list)):
                #threshold for colour inclusion needs adjusting
                if colour_list[i][0] > (num_pixels/20):
                    final_list.append(colour_list[i])
                    print(colour_list[i])
                    closest_colour = min(colour_reference, key=lambda c: (c[0]-colour_list[i][1][0])**2 + (c[1]-colour_list[i][1][1])**2 + (c[2]-colour_list[i][1][2])**2)
                    print(closest_colour)
            flag_info[file] = final_list
    print(flag_info)


    
    
